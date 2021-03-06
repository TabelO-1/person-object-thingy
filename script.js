'use strict';

function Person(name_param, age, email, nickname) {
    this.name = name_param;
    this.age = age;
    this.email = email;
    this.nickname = nickname;
}
Person.prototype.render = function() {
    let mainSection = document.getElementById('mainSection')

    let card = document.createElement('section');
    card.className = 'card';
    let nameH2 = document.createElement('h2');
    let ageP = document.createElement('p');
    let emailP = document.createElement('p');
    let nickNameP = document.createElement('p');

    nameH2.textContent = this.name;
    ageP.textContent = 'Age: ' + this.age;
    emailP.textContent = 'Email: ' + this.email;
    nickNameP.textContent = 'Nickname: ' + this.nickname;

    card.appendChild(nameH2);
    card.appendChild(ageP);
    card.appendChild(emailP);
    card.appendChild(nickNameP);
    mainSection.appendChild(card);
};
/*let kitten = new Person('Kitten', 30, 'mewmewmew@mewmewmew.artime', 'Kitten LaRue');
kitten.render();*/

let createButton = document.getElementById('create');

createButton.addEventListener('click', createPerson)

function createPerson() {
    let person = new Person(document.getElementById("name").value, 
    document.getElementById("age").value, 
    document.getElementById("email").value,
    document.getElementById("nickname").value,
    );
    person.render();
}