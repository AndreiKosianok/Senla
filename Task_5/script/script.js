/* 
Написать функцию, которая принимает массив первым аргументом и число
вторым аргументом. Функция должна вернуть наименьший индекс, если
данное число было бы добавлено в массив и массив отсортирован по
возрастанию.
Задания 4-7 должны выводить результат в консоль браузера.
*/

var inputSet = document.querySelector("#input_set"),
    inputNumber = document.querySelector("#input_number"),
    inputButton = document.querySelector("#input_button"),
    output = document.querySelector("#output");

inputButton.addEventListener('click', function () {
    var arrayFromInput = inputSet.value.replace(/\s+/g, " ").split(""); //удаляет возможные лишние (двойные) пробелы и получает новый массив из строки
    console.log(getLowerestIndex(arrayFromInput, +inputNumber.value));
    output.innerText = "Press F12 to see result";
});

// var testArray = [0, 1, 2, 3, 4, 5, 6];
// var testArray = [0, 1, 2, 3, 4, 5];
// var testArray = [0, 1, 2];

// console.log(getLowerestIndex(testArray, 2));

function getLowerestIndex(array, compareNumber) {
    return array.sort(function (a, b) { //сортируем массив по возрастанию
        return a - b;
    }).findIndex(function(element){ //возвращаем индекс удовлетворяющего элемента
        return compareNumber <= element;
    });
}