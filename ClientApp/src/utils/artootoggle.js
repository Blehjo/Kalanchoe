const libraries = {
    0: "https://kalanchoeai-server.azurewebsites.net/api/chatgpt/completion",
    1: "https://kalanchoeai-server.azurewebsites.net/api/chatgpt/dalle",
    2: "https://kalanchoeai-server.azurewebsites.net/api/chatgpt/code",
    3: "https://kalanchoeai-server.azurewebsites.net/api/chatgpt/artoo"
}

export const toggle = (library) => {
    switch (library) {
        case "Text": 
            return libraries[0];
        case "Art": 
            return libraries[1];
        case "Code": 
            return libraries[2];
        case "Artoo": 
            return libraries[3];
        default:
            return "Try again";
    }
}