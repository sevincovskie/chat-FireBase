
 import db from "./firebase.mjs";

 import { ref, set ,push, get, onValue,remove, child  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";


//  async function authenticate () {
//     let user = window.localStorage.getItem('user');
//     if (!user) {
//         document.querySelector('.login').style.display = 'block';
//         document.querySelector('.container').style.display = 'none';
//     } else {
//         user = JSON.parse(user);
//         if((await get(ref(db, `users/${user.key}`))).exists()) {
//             document.querySelector('.login').style.display = 'none';
//             document.querySelector('.container').style.display = 'block';
//         } else {
//             localStorage.removeItem('user');
//             document.querySelector('.login').style.display = 'block';
//             document.querySelector('.container').style.display = 'none';
//         }
        
//     }
// }

// authenticate();

document.querySelector('#login-form').addEventListener('submit', e => {
    e.preventDefault();

    const username = e.target.username.value;

    const snapshot = push(ref(db, 'users'));

    set(ref(db, `users/${snapshot.key}`), username).then(() => {
        const user = {
            username,
            key: snapshot.key
        }

        localStorage.setItem('user', JSON.stringify(user));
        // authenticate();
    });
});

document.querySelector('.message-form').addEventListener('submit', e => {
    e.preventDefault();

    const message = e.target.message.value;
    const user = JSON.parse(localStorage.getItem('user'));

    const snapshot = push(ref(db, 'chat'));

    set(ref(db, `chat/${snapshot.key}`), {
        text: message,
        user,
    }).then(() => {
        e.target.message.value = '';
    }); 
});

onValue(ref(db, 'chat'), snapshot => {

    const user = JSON.parse(localStorage.getItem('user'));
    const chat = snapshot.val();
    const messagesDiv = document.querySelector('.messages');

    messagesDiv.innerHTML = '';

    for(let key in chat) {
        const message = chat[key];
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (user.key === message.user.key) {
            messageDiv.classList.add('my-message');
        } else {
            messageDiv.classList.add('incoming-message');
        }

        messageDiv.innerHTML = `${message.user.username}: ${message.text}`;

        messagesDiv.append(messageDiv);
    }
});

 