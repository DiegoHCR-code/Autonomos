$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})


var buttonSend = document.getElementById('button-send');

buttonSend.addEventListener('click', function(e){
    validateForm(e);
});

function validateForm(e){
    
    var nameInput = document.getElementById('name-form');
    var lastnameInput = document.getElementById('lastname-form');
    var phoneInput = document.getElementById('phone-number-form');
    var emailInput = document.getElementById('email-form');

    var nameSpan = document.getElementById('name-span');
    var lastnameSpan = document.getElementById('lastname-span');
    var phoneSpan = document.getElementById('phone-span');
    var emailSpan = document.getElementById('email-span');
    
    var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var phoneRegex = /^\d{2}\d{9}$/;
    
    var isValid = true;

    if (nameInput.value.length < 2) {
        nameSpan.style.display = 'block';
        isValid = false;
    } else {
        console.log("Nome correto!", nameInput.value);
    }
    if (lastnameInput.value.length < 2) {
        lastnameSpan.style.display = 'block';
        isValid = false;
    } else {
        console.log("Sobrenome correto!");
    }
    if (!phoneRegex.test(phoneInput.value)) {
        phoneSpan.style.display = 'block';
        isValid = false;
    } else {
        console.log("Telefone correto!");
    }
    if (!emailRegex.test(emailInput.value)) {
        emailSpan.style.display = 'block';
        isValid = false;
    } else {
        console.log("Email correto!");
    }

    return isValid;
}

