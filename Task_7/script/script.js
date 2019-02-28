/* 
Написать функцию, которая принимает один аргумент, и возвращает объект,
который имеет только два метода:
    getValue() - метод для получения значения;
    setValue() - метод для установки значения;
Задания 4-7 должны выводить результат в консоль браузера.
*/

var inputNumber = document.querySelector("#input_number"),
    inputButton = document.querySelector("#input_button"),
    output = document.querySelector("#output");
var obj = createHolder();

inputButton.addEventListener('click', function () {
    obj.setValue(+inputNumber.value);
    obj.getValue();
    output.innerText = "Press F12 to see result";
});

function createHolder(variable) {
    return {
        variable: variable,
        getValue: function () {
            return console.log(this.variable);
        },
        setValue: function (variable) {
            this.variable = variable;
        }
    };
}
// var obj = createHolder(5);
// obj.getValue();
// obj.setValue(2);
// obj.getValue();