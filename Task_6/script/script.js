/* 
Дан массив строк и символ, который используется как граница. Вернуть рамку
с текстом внутри.
Условия:
    1. всегда сохраняйте пробелы между строкой и правой и левой границами
    2. самая большая строка в массиве должна задавать размер рамки
    3. входной массив никогда не пустой
Задания 4-7 должны выводить результат в консоль браузера.
*/

var inputSet = document.querySelector("#input_set"),
    inputSymbol = document.querySelector("#input_symbol"),
    inputButton = document.querySelector("#input_button"),
    output = document.querySelector("#output");

inputButton.addEventListener('click', function () {
    var array = inputSet.value.split(" ");
    frame(array, inputSymbol.value);
    output.innerText = "Press F12 to see result";
});

// var testArray = ["Create", "a", "frame"];
// var testArray = ["There", "is", "no", "cow", "level"];

// frame(testArray, "+");

function frame(array, borderSymbol) {
    var maxLength = 0,
        messageLine = "",
        messageBorder = "";
    array.forEach(function (element) { //получает длинну наибольшего элемента
        maxLength = maxLength < element.length ? element.length : maxLength;
    });
    for (var i = 0; i < maxLength + 4; i++) { //формирует верхнюю и нижнюю границу - длина наибольшего элемента + граница и пробел с двух сторон
        messageBorder += borderSymbol;
    }
    console.log(messageBorder);
    array.forEach(function (element) { //формирует необходимую строку для каждого элемента
        messageLine = borderSymbol + " " + element;
        for (space = 0; space < maxLength - element.length; space++) { //добавляет необходимое количество пробелов в строку
            messageLine += " ";
        }
        messageLine += " " + borderSymbol;
        console.log(messageLine);
    });
    console.log(messageBorder);
}