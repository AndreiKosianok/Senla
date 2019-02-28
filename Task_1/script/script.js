/* 
Создать поле ввода(input), которое при вводе значения(число) показывает на
экране текст в определенном формате. Например при вводе 3, на экране
должен появится текст в формате: '1 sheep...2 sheep...3 sheep'.
*/
var inputNumber = document.querySelector("#input_number"),
    inputButton = document.querySelector("#input_button"),
    output = document.querySelector("#output");

inputButton.addEventListener('click', function () {
    var arr = [];                                  //создаём пустой массив
    for (var i = 1; i <= inputNumber.value; i++) { //добавляем необходимое количество элементов
        arr.push(i + " sheep");
    }
    output.innerHTML += arr.join("...") + "<br>"; //склеиваем
});