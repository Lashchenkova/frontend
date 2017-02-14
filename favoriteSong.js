/*Поиск любимой песни
 - Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
    played - количество раз песня была проиграна (определить случайным образом), name - имя песни
 - Напишите функцию favoriteSong, которая принимает коллекцию из песен, и возвращает следующую информацию:
    название песни, сколько раз песня была проиграна, индекс песни в коллекции.
 - Вызовите функцию favoriteSong и передайте ей созданную коллекцию*/
function Song(name) {
    this.name = name;
    this.played = Math.floor(Math.random() * 10);
}
var collection = [
    song1 = new Song("Closer"),
    song2 = new Song("Starboy"),
    song3 = new Song("Paris"),
    song4 = new Song("Mercy"),
    song5 = new Song("Caroline")
];

function favoriteSong(arr) {
    arr.forEach(function(item, i) {
        for (var key in item){
            console.log(key + ":" + item[key]);
        }
        console.log ("index: " + i);
    });
}
favoriteSong(collection);