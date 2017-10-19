# Make
ssh
dir
RUN
mkdir / root /
.
ssh /

# Copy
over
private
key, and
set
permissions
ADD
id_rsa / root /
.
ssh / id_rsa

# Create
known_hosts
RUN
touch / root /
.
ssh / known_hosts

