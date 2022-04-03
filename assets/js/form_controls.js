// Récupérer les données du formulaire
const form = document.getElementById('form');
const user_name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// Evènements
form.addEventListener('change', (e) => {
    e.preventDefault();
    form_verification();
});


// Fonctions
function form_verification() {
    // Obtenir toutes les valeurs des inputs
    const name_value = user_name.value.trim();
    const email_value = email.value.trim();
    const subject_value = subject.value.trim();
    const message_value = message.value.trim();
    const no_injection = /^[a-zA-Z][\w\s',\.?!]+$/;

    // Username verify
    if (name_value === "") {
        let the_message = "email cannot be empty!";
    }
    else if (!name_value.match(no_injection)) {
        let the_message = "start with a letter and no code chars";
        user_name.textContent = "";
        setError(user_name, the_message)
    }
    else {
        let the_message = "";
        setSuccess(user_name, the_message)
    }

    // Subject verify
    if (subject_value === "") {
        let the_message = "email cannot be empty!";
    }
    else if (!subject_value.match(no_injection)) {
        let the_message = "start with a letter and no code chars";
        subject.innerText = "";
        setError(subject, the_message)
    }
    else {
        let the_message = "";
        setSuccess(subject, the_message)
    }

    // Message verify
    if (message_value === "") {
        let the_message = "email cannot be empty!";
    }
    else if (!message_value.match(no_injection)) {
        let the_message = "start with a letter and no code chars";
        message.innerText = "";
        messageSetError(message, the_message)
    }
    else {
        let the_message = "";
        messageSetSuccess(message, the_message)
    } 
    

    // Email verify
    if (email_value === "") {
        let the_message = "email cannot be empty!";
    } else if (!email_verify(email_value)) {
        let the_message = "email must be valid! emai@domain.com";
        setError(email, the_message)
    } else {
        let the_message = "";
        setSuccess(email, the_message)
    }
}

function setError(elem, msg) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajouter une classe de erreur
    small.innerText = msg;

    // Ajouter une classe de erreur
    formControl.className = 'form-control error';
}

function setSuccess(elem, msg) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajouter une classe de erreur
    small.innerText = msg;

    // Ajouter une classe de erreur
    formControl.className = 'form-control success';
}

function messageSetError(elem, msg) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajouter une classe de erreur
    small.innerText = msg;

    // Ajouter une classe de erreur
    formControl.className = 'form-control messagearea error';
}

function messageSetSuccess(elem, msg) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajouter une classe de erreur
    small.innerText = msg;

    // Ajouter une classe de erreur
    formControl.className = 'form-control messagearea success';
}

function email_verify(email) {
    /*
    fl_ror.22-t@ggoe.com
    /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}