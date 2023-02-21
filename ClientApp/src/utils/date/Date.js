export const unixConverter = (unixTimestamp) => {
    const convertedTimestamp = new Date(unixTimestamp * 1000).toLocaleDateString("en-US");
    return `Released: ${convertedTimestamp}`;
}

export const utcConverter = (unixTimestamp) => {
    const date = new Date(unixTimestamp);
    const convertedTime = date.toLocaleDateString();
    return convertedTime;
}
