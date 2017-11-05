git difftool --tool=b3 branch1..branch2

git diff > save.patch
patch -p1 < save.patch

git diff --no-prefix > save.patch
patch -p0 < save.patch

