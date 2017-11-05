var {JSDOM} = require('jsdom');
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var importer = require('../Core');
var runSeleniumCell = importer.import('selenium cell');
var {
    loginFacebook,
    likeAllPosts,
    scrapeFacebookFriends
} = runSeleniumCell([
    'log in facebook',
    'like all facebook posts',
    'scrape facebook profile',
    'scrape facebook friends',
]);

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Conversations';

var parseFacebookFriends = () => {
    return getAllXPath([
        '//a[contains(@href, "friends_tab")]//@href'
    ])
    .then(friends => friends
          .filter((elem, pos, arr) => arr.indexOf(elem) === pos)
          .map(f => f.replace(/\?.*$/ig, '')))
}

var getAllXPath;
var collectFacebookProfiles = () => {
    var fresh;
    return loginFacebook()
        // TODO: abstract this data collection from JSDOM
        // TODO: only scrape once per day? use last file instead?
        //.then(() => scrapeFacebookFriends())
        .then(() => {
            var friends = glob.sync('**/*friend*', {cwd: project, nodir: true});
            friends.sort((a, b) => 
                new Date(fs.statSync(path.join(project, a)).mtime).getTime()
                    - new Date(fs.statSync(path.join(project, b)).mtime).getTime());
            return fs.readFileSync(path.join(project, friends.pop())).toString();
        })
        .then(doc => {
            // call script to get all Facebook friends
            var dom = new JSDOM(doc);
        console.log('before?')
            getAllXPath = importer.import('all xpath elements',  {
                client: {
                    execute: (func, ...args) => Promise.resolve({
                        value: func.apply(dom.window.document, args)
                    }),
                    addCommand: () => {
                    }
                },
                document: dom.window.document,
                XPathResult: {ORDERED_NODE_ITERATOR_TYPE: 5}
            })
            return parseFacebookFriends();
        })
        .then(friends => {
            // use glob.sync to make sure every friend is hit at least once in a rotation
            var existingPosts = glob.sync('**/*-posts-*.json', {cwd: project});
            // TODO: way to tell which part of the URL is unique?
            var friendCount = friends.length;
            fresh = friends.filter(profile => {
                const profileId = profile.replace(/^\/|\/$/ig, '').split('/').pop()
                .replace(/[^a-z0-9]/ig, '_');
                // TODO: check for file.stat instead of year?
                return existingPosts.indexOf(profileId
                    + '-posts-' + (new Date()).getFullYear() + '.json') === -1;
            });
            const percent = Math.round((friendCount - fresh.length) / friendCount * 100);
            console.log((friendCount - fresh.length) + ' / ' + friendCount + ' : '
                + percent
                + '%');
            console.log(fresh.slice(0, 10));
            //return percent === 100 ? scrapeFacebookFriends() : [];
        })
        .then(() => {
            return importer.runAllPromises(fresh.slice(0, 10)
                .map(p => (resolve) => likeAllPosts(p, null).then(r => resolve(r))));
        })
        .catch(e => console.log(e))
};
module.exports = collectFacebookProfiles;
