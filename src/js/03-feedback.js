import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const formInfo = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function fillFormFields () {
    try {
    const formInfoFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if(!formInfoFromLS) {
        return
    }
    for (const prop in formInfoFromLS) {
       form.elements[prop].value = formInfoFromLS[prop];
    }  
    } catch (err) {
        console.log(err);
    }  
}

fillFormFields();

function onFormInput (event) {
    const { target } = event;
    const fieldInfo = target.value;
    const fieldName = target.name;
    
formInfo[fieldName] = fieldInfo;
localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
console.log(formInfo);
} 

function onFormSubmit (event){
    event.preventDefault();
    form.reset();
    console.log(formInfo);
    localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


