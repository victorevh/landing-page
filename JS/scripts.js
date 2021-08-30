//Criando Scroll do slideshow
document.querySelector("#items")
.addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0) 
    } else {
        event.target.scrollBy(-300, 0) 
    }
})

// scroll menu

$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffSet = $(id).offset().top;
    menuHeight = $('nav').innerHeight(); 
    $('html, body').animate({
        scrollTop: targetOffSet - menuHeight
    }, 500);

});

//Adicionando evento de cor na borda dos campos

var email = document.getElementById('email');
var password = document.getElementById('password');
var submit = document.getElementById('submit');

email.addEventListener('focus',()=>{
    email.style.borderColor = "rgb(109, 21, 192)";
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
});

password.addEventListener('focus',()=>{
    password.style.borderColor = "rgb(109, 21, 192)";
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc";
});

submit.addEventListener('focus',()=>{
    submit.style.borderColor = "rgb(109, 21, 192)";
});
submit.addEventListener('blur',()=>{
    submit.style.borderColor = "#ccc";
});