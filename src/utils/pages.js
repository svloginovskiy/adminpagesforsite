export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 1; i < totalPages + 1; i++) {
        result.push(i);
    }
    return result;
}