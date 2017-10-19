var glob = require('glob');
var importer = require('../Core');
var fs = require('fs');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Conversations';

var listFacebookPosts = (profile, posts) => {
    return client
        .then(() => getAllUntil(
            '//body',
            '//*[contains(@class, "fbUserPost")]//*[contains(@class, "timestampContent")]/parent::*/parent::*/@href',
            posts,
            (a, b) => a === b,
            (i) => i < 10
        ))
        // transform add facebook url
        .then(r => r.map(l => l.indexOf('facebook.com') === -1
            ? ('https://www.facebook.com' + l)
            : l))
        .catch(e => console.log(e))
};

var scrapeFacebookPost = (post) => {
    console.log(post);
    return client
        .getUrl().then(url => url.indexOf(post) == -1
            ? client.url(post)
            : client)
        .pause(3000)
        .then(() => getAllXPath([
            '//body[not(.//*[contains(@class, "fbPhotoSnowliftPopup")])]|//body[.//*[contains(@class, "fbPhotoSnowliftPopup")]]//*[contains(@class, "fbPhotoSnowliftPopup")]',
            {
                posts: [
                    './/*[contains(@class, "fbPhotoSnowliftAuthorInfo")]|.//*[contains(@class, "fbUserPost")]',
                    {
                        description:
                            './/following-sibling::div//*[contains(@class, "fbPhotosPhotoCaption")]//text()|.//*[contains(@class, "userContent")]//text()|.//h5//text()|.//a[contains(@class, "profileLink")]//text()',
                        participants: [
                            './/a[contains(@class, "profileLink")]/@href|.//a[contains(@href, "facebook") and .//img]/@href',
                            './following-sibling::div//a/@href',
                            './/*[contains(@class, "commentable_item")]//a[contains(@class, "UFICommentActorName")]/@href'
                        ],
                        comments: [
                            './/h6[contains(., "Comments")]//following-sibling::div/div/div[contains(@class, "UFIComment")]',
                            {
                                time:
                                    './/*[contains(@class, "uiLinkSubtle")]//text()',
                                content:
                                    './/*[contains(@class, "UFICommentBody")]//text()',
                                from:
                                    './/a[contains(@class, "UFICommentActorName")]/text()|.//a[contains(@class, "UFICommentActorName")]/@href'
                            }
                        ]
                    }
                ]
            }
        ]))
        .then(r => r[0].posts.map(p => {
            return Object.assign(p, {
                post: post,
                description: p.description.join(' '),
                participants: p.participants.filter(i => i
                        .indexOf('photo') === -1
                    && i !== '#'
                    && i.indexOf('ufi/reaction') === -1),
                photos: p.participants.filter(i => i
                        .indexOf('photo') !== -1
                    && i !== '#'
                    && i.indexOf('ajax/sharer') === -1),
                comments: p.comments.map(c => Object.assign(c, {
                    time: c.time.join(' '),
                    content: c.content.join(' '),
                    from: c.from.join(' ')
                }))
            });
        }))
        .catch(e => console.log(e))
};

var likeFacebookPost = (post) => {
    return client
        .getUrl().then(url => url.indexOf(post) === -1
            ? client.url(post)
            : client)
        .pause(3000)
        .elements(
            '//body[not(.//*[contains(@class, "fbPhotoSnowliftPopup")])]//a[contains(., "Like")][contains(@class, "UFILikeLink")][not(contains(@class, "UFILinkBright"))]|//body[.//*[contains(@class, "fbPhotoSnowliftPopup")]]//*[contains(@class, "fbPhotoSnowliftPopup")]//a[contains(., "Like")][contains(@class, "UFILikeLink")][not(contains(@class, "UFILinkBright"))]')
        .then(els => {
            return importer.runAllPromises(els.value.slice(0, 4)
                .map(el => (resolve) => client.elementIdClick(el.ELEMENT)
                    .pause(1500)
                    .catch(e => resolve())
                    .then(() => resolve())))
        })
        .catch(e => console.log(e));
}

var posts, getAllXPath, getAllUntil;
var likeAllPosts = (profile, like = null) => {
    var profileId = profile.replace(/^\/|\/$/ig, '').split('/').pop()
        .replace(/[^a-z0-9]/ig, '_');
    var file = glob.sync('**/' + profileId + '-*.json', {cwd: project})[0];
    try {
        posts = JSON.parse(fs.readFileSync(file))
    }
    catch (e) {
        posts = []
    }
    return client
        .then(() => importer.import([
            'get all elements until',
            'all xpath elements'
        ], {client}))
        .then(r => {
            getAllUntil = r[0];
            getAllXPath = r[1];
            return client.getUrl();
        })
        .then(url => url !== profile
            ? client.url(profile)
            : client)
        .then(() => listFacebookPosts(posts.map(p => p.post)))
        // TODO: remove slice to download all posts from first part
        .then(r => importer.runAllPromises(r.map(c => (resolve) => {
            return (like ? likeFacebookPost(c) : client)
                .then(() => client.isExisting('//h3[contains(.,"Temporarily Blocked")]'))
                .then(is => {
                    if (is) like = null;
                    return scrapeFacebookPost(c);
                })
                .then(r => resolve(r))
                .catch(e => console.log(e))
        })))
        .then(t => {
            var filename = project + '/'
                + profileId
                + '-posts-' + (new Date()).getFullYear() + '.json';
            fs.writeFileSync(filename, JSON.stringify(t, null, 4));
            return t;
        })
        .catch(e => console.log(e))
};
module.exports = likeAllPosts;

