//get a reference to the unordered list
const postList = document.querySelector('.posts');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const loginCheck = (user) => {
    if(user){
        loggedInLinks.forEach(link => link.style.display='block');
        loggedOutLinks.forEach(link => link.style.display = 'none');
    }else{
        loggedInLinks.forEach(link => link.style.display='none');
        loggedOutLinks.forEach(link => link.style.display = 'block');
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
            <div class="collapsible-header grey lighten-4">${post.course}</div>
            <div class="collapsible-body white">${post.prerequisites}</div>
        <li>
        `;
        html += li;
    });
    postList.innerHTML = html
}else{
    postList.innerHTML = '<h4 class="center-align">Login to see posts</h4>'
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