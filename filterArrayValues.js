/*Создайте функцию filterArrayValues(arr, a, b), которая получает массив с числами arr
и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна менять сам массив и ничего не возвращать.*/
function filterArrayValues(arr, a, b)
{
    arr.forEach(function(item, i, arr) {
        if (a > item || item > b) {
            delete arr[i];
        }
    });
}
var art = [1,2,3,6,9,80,1,10];
filterArrayValues(art, 2, 7);
console.log(art);
