export function calcReadingTime(content) {
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / 100 / 0.3);
}
