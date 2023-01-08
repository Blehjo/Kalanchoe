var traverson = require('traverson');
var JsonHalAdapter = require('traverson-hal');

export const artsyToken = () => {
    var xappToken;

    request
        .post(process.env.REACT_APP_ARTSY_URL)
        .send({ client_id: process.env.REACT_APP_ARTSY_CLIENT_ID, client_secret: process.env.REACT_APP_ARTSY_CLIENT_SECRET })
        .end(function (res) {
            xappToken = res.body.token;
        });
    return xappToken;
}

export const artsyCall = (searchParameter) => {
    traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
    var api = traverson.from('https://api.artsy.net/api').jsonHal();

    api.newRequest()
        .follow('artist')
        .withRequestOptions({
            headers: {
                'X-Xapp-Token': artsyToken,
                'Accept': 'application/vnd.artsy-v2+json'
            }
        })
        .withTemplateParameters({ id: searchParameter })
        .getResource(function (error, result) {
            return result;
        });
}
