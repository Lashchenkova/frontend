/*На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию arrSummarise(arr), вызов которой должен возвращать новый массив
из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr
до этой позиции включительно.*/
function arrSummarise(arr)
{
    result = [];
    arr.reduce(function(sum, current, index) {
        result.push(sum + current);
        return result[index];
    }, 0);
    return result;
}
var arr = [1,2,3,4,5];
arrSummarise(arr);
