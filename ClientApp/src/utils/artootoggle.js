const libraries = {
    0: "https://localhost:7028/api/chatgpt/completion",
    1: "https://localhost:7028/api/chatgpt/dalle",
    2: "https://localhost:7028/api/chatgpt/code"
}

export const toggle = (library) => {
    switch (library) {
        case "Text": 
            return libraries[0];
        case "Art": 
            return libraries[1];
        case "Code": 
            return libraries[2];
        default:
            return "Try again";
    }
}