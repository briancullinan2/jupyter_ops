mkdir - p
act.subscription.management;
if git--work - tree =
.
/act.subscription.management branch | grep 'master'; then \
echo
'Already checked out subscriptions management'; \
else \
git
clone
https://{username}@github.com/Swiftpage/act.subscription.management ./act.subscription.management ; \
    fi;
ls - la
act.subscription.management;
pwd
