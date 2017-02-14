/*- Напишите функцию compareObjects, которая принимает 2 объекта и название свойства,
    по которому нужно выполнить сравнение объектов, и выводит в консоль свойство name того объекта,
    у которого значение переданного свойства больше.
 - Создайте один объект с помощью литерала, второй через конструктор.
 - Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
*/
 function compareObjects(obj1, obj2, prop) {
    var result = obj1[prop] - obj2[prop];
    if(result > 0){
        console.log (obj1.name);
    } else if(result < 0){
        console.log (obj2.name);
    }
}
var obj1 = {
        name: "John",
        age: 16
};
var obj2 = new function() {
    this.name = "Jane";
    this.age = 6;
};
compareObjects(obj1, obj2, "age");