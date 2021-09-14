const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');

button.addEventListener('click', function(e){
    if(!input.value) return;
    createTask(input.value);
});

input.addEventListener('keypress', function(e){
    if(e.charCode === 13) {
    if(!input.value) return;
    createTask(input.value);
} 
});

function createLI(){
    const li = document.createElement('li');
    return li;
};

function clearInput() {
    input.value='';
    input.focus();
};

function createTask(textInput){
    const createdLi = createLI();
    createdLi.innerHTML = textInput;
    createdLi.classList.add('li-created');
    list.appendChild(createdLi);
    clearInput();
    createDeleteButton(createdLi);
};

function createDeleteButton(createdLi){
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.setAttribute('class', 'button-delete');
    createdLi.appendChild(deleteButton);
};

document.addEventListener('click', function(e){
    const deleteButtonList = e.target;
    
    if(deleteButtonList.classList.contains('button-delete')){
        deleteButtonList.parentElement.remove();
    }
});