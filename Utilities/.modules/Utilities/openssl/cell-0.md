How to create a trusted root CA?

Warning: Creating a trusted CA greatly increases your computers attack surface.  This should not be used in a production environment or where PCI (payment card information) or PMI (patient medical information) is held.
https://security.stackexchange.com/questions/44509/what-stops-a-hacker-from-installing-its-own-ca-certificate

Warning: The password is also set to x, this is not secure.  Passwords should be provided by the startup process, and clear when the script is finished.
