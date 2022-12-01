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


function changeText(id){

    switch (id) {
        case 1:
            let openedUnamButton = document.getElementById('openedUnamButton')
            if (openedUnamButton) {
                openedUnamButton.disabled = true;
                setTimeout(function(){
                    openedUnamButton.disabled = false;
                }, 500);
                openedUnamButton.innerHTML = "More Info";
                openedUnamButton.id = "unamButton"
            } else {
                let unamInfo = document.getElementById('unamButton');
                unamInfo.disabled = true;
                setTimeout(function(){
                    unamInfo.disabled = false;
                }, 3000);
                unamInfo.innerHTML = "Close";
                unamInfo.id = "openedUnamButton";
            }
            break;

        case 2:
            let openedCodeAButton = document.getElementById('openedCodeAButton')
            if (openedCodeAButton) {
                openedCodeAButton.disabled = true;
                setTimeout(function(){
                    openedCodeAButton.disabled = false;
                }, 500);
                openedCodeAButton.innerHTML = "More Info";
                openedCodeAButton.id = "codeAButton"
            } else {
                let codeAInfo = document.getElementById('codeAButton');
                codeAInfo.disabled = true;
                setTimeout(function(){
                    codeAInfo.disabled = false;
                }, 6000);
                codeAInfo.innerHTML = "Close";
                codeAInfo.id = "openedCodeAButton";

            }
            break;

        case 3:
            let openedCoderHButton = document.getElementById('openedCoderHButton')
            if (openedCoderHButton) {
                openedCoderHButton.disabled = true;
                setTimeout(function(){
                    openedCoderHButton.disabled = false;
                }, 500);
                openedCoderHButton.innerHTML = "More Info";
                openedCoderHButton.id = "coderHButton"
            } else {
                let coderHButton = document.getElementById('coderHButton');
                coderHButton.disabled = true;
                setTimeout(function(){
                    coderHButton.disabled = false;
                }, 2500);
                coderHButton.innerHTML = "Close";
                coderHButton.id = "openedCoderHButton";
            }
            break;

        default: alert("posible error");
            break;
    }
};



// function createForm(formVar){
//     let formDesign = document.createElement(`div`);
//     formDesign.id = "pruebaDeId";
//     formDesign.classList.add('pruebaDeClass');
//     formDesign.innerHTML = 'infoinfoinfo';
//     formVar.appendChild(formDesign);
// }