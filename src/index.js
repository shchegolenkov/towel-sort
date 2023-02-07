module.exports = function towelSort(matrix) {
    let result = [];
    const sort = (array) => {
        array.forEach((elem) => {
            result.push(elem);
        });
    };
    const sortMatrix = (matrix) => {
        for (let elem in matrix) {
            if (elem % 2) {
                matrix[elem].reverse();
                sort(matrix[elem]);
            } else {
                sort(matrix[elem]);
            }
        }
    };
    sortMatrix(matrix);
    return result;
};
