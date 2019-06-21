// GET ELEMENTS 
const heading = document.querySelector('.heading');
const input = document.querySelector('.input');
const para = document.querySelector('.content');
//functions
function changeContent (e){
    let age = e.target.value 
    if (age < 18 ){
        heading.textContent = "Beta, mumma ka duddu piyo";
        para.textContent = "chota sa hai ni, bandiyan dekhega ";
    } else {
        heading.textContent = "Chal bey jhutha";
        para.textContent = "Jhuth boley 'crow' kaatey"; 
    }
}

input.addEventListener('input' , changeContent)