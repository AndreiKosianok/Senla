var inputNumber = document.querySelector("#input_number"),
    inputButton = document.querySelector("#input_button"),
    output = document.querySelector("#output");


inputButton.addEventListener('click', function () {
    output.innerHTML = "";
    rndRectangle(inputNumber.value, output);
});


function rndRectangle(rectNumber, docArea) {
    for (var i = 1; i <= rectNumber; i++) {         //количество "строк"
        for (var j = 1; j <= rectNumber; j++) {     //количество "столбцов"
            var div = document.createElement('div'); //создаём новый элемент
            div.style.background = randomColor();   //присваиваем рандомный цвет
            docArea.appendChild(div);               //добавляем получившийся элемент в нужную область
            if (j == rectNumber) {                  //если нужное количество прямоугольников в строке достигнуто - переходим на новую строку
                docArea.innerHTML += "<br>";
            }
        }
    }
}

function randomColor() {                            //рандомно генерирует цвета
    return '#' + Math.random().toString(16).substr(-6); //указывать цвета в hex удобнее - компактно
}