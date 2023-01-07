const { Configuration, OpenAIApi } = require("openai");

export const secondCompletion = (prompt) => {
    const openAIKey = process.env.REACT_APP_OPENAI_API_KEY;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(openAIKey)
        },
        body: JSON.stringify({
            'model': "text-davinci-003",
            'prompt': prompt,
            'temperature': 0.1,
            'max_tokens': 7,
            'top_p': 1,
            'frequency_penalty': 0,
            'presence_penalty': 0.5,
            'stop': ["\"\"\""],
        })
    };

    fetch('https://api.openai.com/v1/completions', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log("Ran out of tokens for today! Try tomorrow!");
        });
};

export const testCompletion = async () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 7,
    });
};

export const firstCompletion = async () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: 'this is a test',
        maxTokens: 5,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', "testing"]
    });

    console.log(gptResponse.data);
};