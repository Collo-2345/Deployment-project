
/*------------section for login--------*/
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnlogin = document.querySelector('.btn-login');
const closeicon = document.querySelector('.close-icon');


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnlogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

closeicon.addEventListener('click', (e)=> {
    e.preventDefault();
    wrapper.classList.add('active-iconclose');
});

/*------------section about me --------*/
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){  
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
/*------------section small screen to display menu--------*/

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = 0;
}
function closemenu(){
    sidemenu.style.right ='-200px';
}
/*------------section store contact information on a google sheet--------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbziZvmX9Tfkzm8QI1_zFvAaXvWSAU1rCx17AQp76syy0aOYi_3dn-D6j-7tpvEOrVOK/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message send succesfully..."
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})  