var importer = require('../Core');

var getContactInfo = (profile) => {
    return client
        .execute(url => {
            var a = document.createElement('a');
            a.setAttribute('href', url);
            a.href = url;
            a.style.position = 'absolute';
            a.style.zIndex = 4294967295;
            a.style.top = 0;
            a.style.left = 0;
            a.style.bottom = 0;
            a.style.right = 0;
            document.body.appendChild(a);
            setTimeout(() => document.body.removeChild(a), 500)
        }, profile)
        .click('a[href*="' + profile + '"]')
        .pause(2000)
        .then(() => readLinkedInProfileInfo())
        .catch(e => console.log(e))
};

var loadEntirePage = () => {
    return client
    // load all defered elements by scrolling
        .then(() => getAllUntil(
            false,
            '//*[contains(@class, "pv-deferred-area")]/@id',
            [],
            (a, b) => a === b,
            (i) => i < 30
        ))
        .pause(2000)
        // show more all sections
        .scroll(0, 0)
        .then(() => importer.runAllPromises([
            '//button[contains(., "See more")]',
            '//button[contains(., "more skills")]',
            '//button[contains(., "more education")]',
            '//button[contains(., "more recommendations")]'
        ].map(selector => resolve => {
            return client
                .isVisible(selector)
                .then(is => is
                    ? client.click(selector).pause(1000)
                    : [])
                .then(e => resolve())
                .catch(e => resolve())
        })))
        .catch(e => console.log(e))
};

var loginLinkedIn, readLinkedInProfileInfo, getAllXPath;
var scrapeEntireLinkedInProfile = (profile) => {
    var contact;
    return client
        .then(() => importer.import([
            'log in linkedin',
            'scrape linkedin profile',
            'xpath elements'
        ], {client, getCredentials}))
        .then(r => {
            loginLinkedIn = r[0];
            readLinkedInProfileInfo = r[1];
            getAllXPath = r[2];
            return loginLinkedIn();
        })
        .then(() => getContactInfo(profile))
        .then(r => {
            contact = r;
            return loadEntirePage();
        })
        // get extra profile info
        .then(() => {
            return getAllXPath({
                summary: '//p[contains(@class, "section__summary")]//text()',
                experience: [
                    '//*[contains(@class, "profile-section__card")]|//*[contains(@class, "profile-section__section-info-item")]',
                    ['.//text()']
                ],
                skills: [
                    '//*[contains(@class, "skill-entity--featured")]|//*[contains(@class, "skill-entity__pill")]',
                    ['.//text()']
                ],
                recommendations: [
                    '//*[contains(@class, "recommendation-entity")]',
                    ['.//text()']
                ],
                interests: [
                    '//*[contains(@class, "interest-entity")]',
                    ['.//text()']
                ]
            });
        })
        .then(r => {
            return Object.assign(r, {
                summary: r.summary.join(''),
                experience: r.experience.map(e => typeof e[0] === 'string'
                    ? e[0]
                    : e[0].join('')
                        .trim().split(/\s*\n+\s*/)),
                skills: r.skills.map(e => typeof e[0] === 'string'
                    ? e[0]
                    : e[0].join('')
                        .trim().split(/\s*\n+\s*/)),
                recommendations: r.recommendations.map(e => typeof e[0] === 'string'
                    ? e[0]
                    : e[0].join('')
                        .trim().split(/\s*\n+\s*/)),
                interests: r.interests.map(e => typeof e[0] === 'string'
                    ? e[0]
                    : e[0].join('')
                        .trim().split(/\s*\n+\s*/))
            }, contact)
        })
        .catch(e => console.log(e))
};
module.exports = scrapeEntireLinkedInProfile;

