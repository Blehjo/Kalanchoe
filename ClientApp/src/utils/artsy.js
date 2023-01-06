var xappToken;

request
    .post(process.env.REACT_APP_ARTSY_URL)
    .send({ client_id: process.env.REACT_APP_ARTSY_CLIENT_ID, client_secret: process.env.REACT_APP_ARTSY_CLIENT_SECRET })
    .end(function (res) {
        xappToken = res.body.token;
    });

