const inputContainer = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputContainer === '') {
        alert("Введите что-нибудь");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputContainer.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputContainer.value = '';
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);