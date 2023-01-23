// Task-1

const btn1 = document.querySelector('.btn1');
const p1 = document.getElementById('p1');

btn1.onclick = function() {
    p1.hidden = true
}

// Task-2
// В переменной `button` находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
// Ответ: 1 и 2

// Task-3

let dives = document.querySelectorAll('.div1');

for(let div1 of dives) {
    div1.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    div1.firstChild.onclick = () => div1.remove();
}