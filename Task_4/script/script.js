/* 
Написать функцию, которая разбивает массив(первый аргумент) на группы
элементов определенного размера(второй аргумент) и возвращает их как
двумерный массив.
Задания 4-7 должны выводить результат в консоль браузера.
*/

var inputSet = document.querySelector("#input_set"),
    inputGroup = document.querySelector("#input_group"),
    inputButton = document.querySelector("#input_button"),
    output = document.querySelector("#output");

inputButton.addEventListener('click', function () {
    var arrayFromInput = inputSet.value.replace(/\s+/g, " ").split(""); //удаляет возможные лишние (двойные) пробелы и получает новый массив из строки
    console.log(getDimensionalArray(arrayFromInput, +inputGroup.value));
    output.innerText = "Press F12 to see result";
});

// var testArray = [0, 1, 2, 3, 4, 5, 6];
// var testArray = [0, 1, 2, 3, 4, 5];
// var testArray = [0, 1, 2];

// getDimensionalArray(testArray, 3);

function getDimensionalArray(array, groupSize) {
    if (array.length == 1 || array.length < groupSize) { //если длина массива недостаточна дальше продолжать не имеет смысла
        return console.log("Array length is too short!!!");
    }
    var dimeArray = [], //массив в который будут складываться полученные элементы
        start = 0;
    while (start < array.length) {
        end = (start + groupSize) >= array.length ? array.length : start + groupSize; //если длинны массива уже недостаточно что бы разбить на группу указанного размера - указываем подходящий размер
        dimeArray.push(array.slice(start, end));
        start += groupSize; //индекс следующего обрезаемого элемента
    }
    // return console.log(dimeArray);
    return dimeArray;
}