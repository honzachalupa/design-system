export const removeDuplicates = (array: string[]) => [...new Set(array)];

export const sortAlphabetically = (array: string[]) =>
    array.sort((a, b) => a.localeCompare(b));
