
const divOculto = document.getElementById('chatlist');
const divchatuser1 = document.getElementById('chat-user1');
const divchatuser2 = document.getElementById('chat-user2');
const divchatuser3 = document.getElementById('chat-user3');
const divchatuser4 = document.getElementById('chat-user4');
const divchatuser5 = document.getElementById('chat-user5');
const user1 = document.getElementById('user1');
const user2 = document.getElementById('user2');
const user3 = document.getElementById('user3');
const user4 = document.getElementById('user4');
const user5 = document.getElementById('user5');
const volver = document.getElementById('chatweb');
const mediaQuery = window.matchMedia('(max-width: 600px)');
const lastmessage1 = document.getElementById('last-message-user1');
const lastmessage2 = document.getElementById('last-message-user2');
const lastmessage3 = document.getElementById('last-message-user3');
const lastmessage4 = document.getElementById('last-message-user4');
const lastmessage5 = document.getElementById('last-message-user5');




function quitarFontWeight(elemento) {
    elemento.style.fontWeight = 'normal';
}


user1.addEventListener('click', function () {

    quitarFontWeight(lastmessage1);
});

user2.addEventListener('click', function () {

    quitarFontWeight(lastmessage2);
});

user3.addEventListener('click', function () {

    quitarFontWeight(lastmessage3);
});

user4.addEventListener('click', function () {

    quitarFontWeight(lastmessage4);
});

user5.addEventListener('click', function () {

    quitarFontWeight(lastmessage5);
});



user1.addEventListener('click', function () {
    if (mediaQuery.matches) {
        divOculto.style.display = 'none';
        divchatuser1.style.display = 'block';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'none';


    } else {
        divOculto.style.display = 'block';
        divchatuser1.style.display = 'block';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'none';
    }
});

user2.addEventListener('click', function () {
    if (mediaQuery.matches) {
        divOculto.style.display = 'none';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'block';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'none';
        divchatuser2.style.fontWeight = '0';

    } else {

        divOculto.style.display = 'block';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'block';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'none';
    }
});

user3.addEventListener('click', function () {
    if (mediaQuery.matches) {
        divOculto.style.display = 'none';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'block';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'none';

    } else {

        divOculto.style.display = 'block';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'block';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'none';
    }
});

user4.addEventListener('click', function () {
    if (mediaQuery.matches) {
        divOculto.style.display = 'none';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'block';
        divchatuser5.style.display = 'none';

    } else {

        divOculto.style.display = 'block';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'block';
        divchatuser5.style.display = 'none';
    }
});

user5.addEventListener('click', function () {
    if (mediaQuery.matches) {
        divOculto.style.display = 'none';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'block';

    } else {

        divOculto.style.display = 'block';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'block';
    }
});

function quitarFontWeight(elemento) {
    elemento.style.fontWeight = 'normal';
}

user1.addEventListener('click', function () {
    // ...
    quitarFontWeight(divchatuser1);
});

user2.addEventListener('click', function () {
    // ...
    quitarFontWeight(divchatuser2);
});

user3.addEventListener('click', function () {
    // ...
    quitarFontWeight(divchatuser3);
});

user4.addEventListener('click', function () {
    // ...
    quitarFontWeight(divchatuser4);
});

user5.addEventListener('click', function () {
    // ...
    quitarFontWeight(divchatuser5);
});

volver.addEventListener('click', function () {
    // Restaura el estado original de los divs
    if (mediaQuery.matches) {
        divOculto.style.display = 'block';
        divchatuser1.style.display = 'none';
        divchatuser2.style.display = 'none';
        divchatuser3.style.display = 'none';
        divchatuser4.style.display = 'none';
        divchatuser5.style.display = 'none';

    }
});



 