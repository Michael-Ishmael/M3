

export const splitParagraphs = (text) => {
    if(!text) return [''];
    const lines = text.split('\n');
    return lines.filter(l => l && l.trim().length > 0 );
};