// document.body.style.backgroundColor = 'black';
// document.body.style.color = 'black';
function downloadCV() {
    alert('Downloading')
};

function formButton(){
    let form = document.getElementById('mailButton');
    let openedForm = document.getElementById('openedMailButton');
    let formContainer = document.getElementById('contactFormContainer');
        if (form) {
            // alert('es el button')
            form.innerHTML = ('Close');
            form.id = "openedMailButton";
            form.style.transition = "2s"
            form.style.backgroundColor = "rgb(255, 0, 0)"
            form.style.color = "rgb(255, 255, 255)"
            form.style.border = "rgb(255, 0, 0)"
            // Aquí se mete cambio de display de form
                formContainer.style.display = "flex";
        } else if (openedForm){
            // alert('es el form');
            openedForm.innerHTML = (`Easy mail <i class="fa-solid fa-envelope-open-text"></i>`);
            openedForm.id = ('mailButton');
            // Aquí se mete cambio de display de form
            formContainer.style.display = "none";
            openedForm.style.color = "rgb(0, 0, 0)"
            openedForm.style.backgroundColor = "#0dcaf0"

            
        }
        else {
            alert('id missmatch found')
        }
};

// function createForm(formVar){
//     let formDesign = document.createElement(`div`);
//     formDesign.id = "pruebaDeId";
//     formDesign.classList.add('pruebaDeClass');
//     formDesign.innerHTML = 'infoinfoinfo';
//     formVar.appendChild(formDesign);
// }