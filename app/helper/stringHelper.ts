const capitalize = (word: string): string => {
    if (!word) return word
    return word[0].toUpperCase() + word.substring(1)
}

export {capitalize}