//Create new users

//get a reference to the form by querying it and storing it in a variable
const signUpForm = document.querySelector('#signup-form');

//Add an event listener...this method takes two parameters - name of event and a callback function
signUpForm.addEventListener('submit', (e)=>{

    //prevent the forms default action of refreshing the page
    e.preventDefault();

    //create constants to store values from the form
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    //signup the user with email and password
    auth.createUserWithEmailAndPassword(email, password).then(userCredential => {

        //need to clear the form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signUpForm.reset();

    })

});