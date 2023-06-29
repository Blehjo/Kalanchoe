export const unixConverter = (unixTimestamp: any) => {
    const convertedTimestamp = new Date(unixTimestamp * 1000).toLocaleDateString("en-US");
    return `Released: ${convertedTimestamp}`;
}

export const utcConverter = (unixTimestamp: Date) => {
    const date = new Date(unixTimestamp);
    const convertedTime = date.toLocaleDateString();
    return convertedTime;
}