//get a reference to the unordered list
const postList = document.querySelector('.posts');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const adminLinks = document.querySelectorAll('.admin');

const loginCheck = (user) => {
    if(user){
        loggedInLinks.forEach(link => link.style.display='block');
        loggedOutLinks.forEach(link => link.style.display = 'none');
        user.getIdTokenResult().then(idTokenResult => {
            if(idTokenResult.claims.admin){
                adminLinks.forEach(link => link.style.display = 'block');
            }
        })


    }else{
        loggedInLinks.forEach(link => link.style.display='none');
        loggedOutLinks.forEach(link => link.style.display = 'block');
        adminLinks.forEach(link => link.style.display = 'none');
    }
}





//setup posts...takes the data and cycles through it with a for each loop
const setupPosts = (data)=> {
if(data.length){
let html = '';
    data.forEach(doc =>{
        const post = doc.data();

        const li = `
        <li>
            <div class="collapsible-header grey lighten-4">${post.title}</div>
            <div class="collapsible-body white">${post.content}</div>
        <li>
        `;
        html += li;
    });
    postList.innerHTML = html
}else{
    if(auth.currentUser != null){
        postList.innerHTML = '<h4 class="center-align">Create a post</h4>'
    }else{
        postList.innerHTML = '<h4 class="center-align">Login to see posts</h4>'
    }
    
}
    
}



// setup materialize components

//this listens for when all the DOM content has been loaded then executes this function
document.addEventListener('DOMContentLoaded', function() {

    //this line initializes the modals
        var modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
      
        //this line initializes the items
        var items = document.querySelectorAll('.collapsible');
        M.Collapsible.init(items);
      
      });