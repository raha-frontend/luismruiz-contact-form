// получить элементы сюда
// добавить событие клика

const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const message = document.querySelector('.message');
const sendBtn = document.querySelector('.send-btn');

sendBtn.addEventListener('click', function(e) {
    e.preventDefault(); // отключаем событие по умолчанию

    if (!inputName.value || !inputEmail.value || !message.value) {
        alert('Необходимо заполнить поля');
    } else {
        sendBtn.disabled = true;
        setTimeout(function() {
            alert('Форма отправлена');
            inputName.value = '';
            inputEmail.value = '';
            message.value = '';
            sendBtn.disabled = false;
        }, 2000);
    }
});
