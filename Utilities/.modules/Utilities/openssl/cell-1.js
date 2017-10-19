ROOT = /Users/
briancullinan / jupytangular2 / Utilities / ca

# prepare
intermediate
CA
mkdir
$ROOT / intermediate
cd
$ROOT / intermediate
mkdir
certs
crl
csr
newcerts
private
chmod
700
private
touch
index.txt
echo
1000 > serial
echo
1000 > $ROOT / intermediate / crlnumber

# create
intermediate
configuration
cp
$ROOT / openssl.cnf
$ROOT / intermediate / openssl.cnf
echo
'
    [CA_default]
dir = /Users/
briancullinan / jupytangular2 / Utilities / ca / intermediate
private_key = \$dir / private
/intermediate.key.pem
certificate = \$dir / certs / intermediate.cert.pem
crl = \$dir / crl / intermediate.crl.pem
policy = policy_loose
" >> $ROOT/intermediate/openssl.cnf

# intermediate
private
CA
key
cd
$ROOT
openssl
genrsa - aes256 - passout
pass:x \
      -out
intermediate / private
/intermediate.key.pem 4096
# create
a
intermediate
csr
cd
$ROOT
openssl
req - config
intermediate / openssl.cnf - new - sha256 \
      -passin
pass:x \
      -subj
'/C=US/ST=Who/L=Is/O=John/OU=Galt/CN=localhost' \
      -key
intermediate / private
/intermediate.key.pem \
      -out
intermediate / csr / intermediate.csr.pem
# sign
the
intermediate
cert
with root CA
cd
$ROOT

openssl
ca - config
openssl.cnf - extensions
v3_intermediate_ca \
      -days
3650 - notext - md
sha256 \
      -passin
pass:x \
      -batch \
      - in intermediate / csr / intermediate.csr.pem \
      -out
intermediate / certs / intermediate.cert.pem

chmod
744
intermediate / certs / intermediate.cert.pem
# verify
intermediate
CA
openssl
x509 - noout - text \
      - in intermediate / certs / intermediate.cert.pem

openssl
verify - CAfile
certs / ca.cert.pem \
      intermediate / certs / intermediate.cert.pem
      
# create
certificate
chain
cat
intermediate / certs / intermediate.cert.pem \
      certs / ca.cert.pem > intermediate / certs / ca - chain.cert.pem
chmod
744
intermediate / certs / ca - chain.cert.pem

