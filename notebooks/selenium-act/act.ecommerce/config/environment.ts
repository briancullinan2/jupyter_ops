// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,

    resetUrl: 'http://localhost/identity/registration/reset',
    forgotUrl: 'http://localhost/identity/registration/forgot',
    registerUrl: 'http://localhost/identity/registration/register',
    trialUrl: 'http://localhost/api/trial/create',
    previewUrl: 'http://localhost/api/purchase',

    tokenUrl: 'http://localhost/identity/connect/token',
    revokeUrl: 'http://localhost/identity/connect/revocation',
    client_id: 'ro.client',
    client_secret: 'secret',

    grant_type: 'password',
    scope: 'openid email address user',
};
