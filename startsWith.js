/*Напишите функцию с именем startsWith, которая принимает два аргумента, оба строки.
Она возвращает истину, когда первый аргумент начинается с символа что присутствует во втором аргументе,
и ложь в противном случае.*/

function startsWith(str1, str2) {
    return !!~str2.toLowerCase().indexOf(str1[0].toLowerCase());
    }
}
//return Boolean(~str2.toLowerCase().indexOf(str1[0].toLowerCase()));

// var a = 'History of the Civil War',
//     b = 'april';
// startsWith(a, b);