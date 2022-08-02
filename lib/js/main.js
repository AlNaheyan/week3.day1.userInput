let title = document.getElementById('title_input');

let heading = document.querySelector('h1');

function fill(KeyboardEvent) {
    const userText = title_input.value;
    heading.innerHTML = userText;

}

heading.addEventListener = ('KeyboardEvent', fill);
