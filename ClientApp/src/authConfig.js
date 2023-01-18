export const msalConfig = {
    auth: {
        clientId: "fb6a5376-4d96-45e4-9fe9-ddf0e4b0822f",
        authority: "https://login.microsoftonline.com/752d15eb-06e2-44d8-b6bd-ef083d740cf7", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        redirectUri: "https://192.168.0.242:44498",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com"
};