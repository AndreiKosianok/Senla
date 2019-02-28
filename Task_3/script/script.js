/* 
Создать поле ввода(input), которое принимает строку слов и возвращает
длину самого короткого слова(слов).

*/
var inputText = document.querySelector("#input_text"),
    inputButton = document.querySelector("#input_button"),
    output = document.querySelector("#output");

inputButton.addEventListener('click', function () {
    if (inputText.value != "") {            //если инпут не пустой - выполняет дальнейшие инструкции
        var inputArray = inputText.value.replace(/\s+/g, " ").split(" "), //удаляет возможные лишние (двойные) пробелы и получает новый массив из строки
            lengthArray = [];                         //массив в котором будет хранится длина каждого слова
        inputArray.forEach(function (element) {
            lengthArray.push(element.length);          //наполняет массив
        });
        lengthArray.sort(function (a, b) {
            return a - b;                              //сортирует по возрастанию, так всегда самым коротким окажется элемент с первым индексом
        });
        shortestWords = inputArray.filter(function (element) {   //создаём новый массив со словами
            return element.length == lengthArray[0];
        });
        output.innerText = "The shortest length of the word: " + lengthArray[0] + ". Words: " + shortestWords;
    } else {
        output.innerText = "Empty input!!!";
    }
});