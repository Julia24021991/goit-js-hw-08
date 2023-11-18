import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form[(name = 'email')];
const textArea = form[(name = 'message')];

savedStorageValue();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (input.value === '' || textArea.value === '') {
        return;
    }
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedText);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', throttle(handleInput, 1000));

function handleInput(event) {
    const userInformation = {
        email: input.value,
        message: textArea.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(auserInformation));
    userInformation[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userInformation));
}

function savedStorageValue() {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedText) {
        if (savedText.message) {
            textArea.value = savedText.message;
        }
        if (savedText.email) {
            input.value = savedText.email;
        }
    }
}
