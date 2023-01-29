// You should implement your task here.

module.exports = function towelSort(matrix) {
    return (
        matrix?.reduce(
            (acc, element, index) =>
                acc.concat(index % 2 ? element.reverse() : element),
            []
        ) || []
    );
};
