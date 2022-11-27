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
            alert('es el button')
            form.innerHTML = ('funciona');
            form.id = "openedMailButton";
            // Aquí se mete la función del form
                createForm(formContainer);
        } else if (openedForm){
            alert('es el form');
            openedForm.innerHTML = ('Funciona de regreso');
            openedForm.id = ('mailButton');
        }
        else {
            alert('id missmatch found')
        }
};

function createForm(formVar){
    let formDesign = document.createElement(`div`);
    formDesign.id = "pruebaDeId";
    formDesign.classList.add('pruebaDeClass');
    formDesign.innerHTML = 'infoinfoinfo';
    formVar.appendChild(formDesign);
}