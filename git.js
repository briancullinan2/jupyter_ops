var Git = require("nodegit");

var cloneOpts = {
    fetchOpts: {
        callbacks: {
            certificateCheck: function () { return 1 },
            credentials: function (url, userName) { return Git.Cred.userpassPlaintextNew('acba9d93a7cf7556ae957664e52e603b480eff2f', 'x-oauth-basic')
                .catch(ex => console.log(ex));
            }
        }
    }
};

// Clone a given repository into the `./tmp` folder.
Git.Clone("https://megamindbrian:Da1ddy23@github.com/Swiftpage/act.ecommerce.git", "./act.ecommerce", cloneOpts)
    .catch(function(err) { console.log(err); });
