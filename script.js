'use strict'

Person(name, age, email, nickname); {
    this.name = name
    this.age = age
    this.email = email
    this.nickname = nickname 

};
me_person = new Person('Mason', 15, 'mason@mason.io', 'the Jar')

Person.prototype.render = function() {
    let mySection = document.getElementById('mySection')

    let nameH2 = document.createElement('h2')
    let ageH2 = document.createElement('h2')
    let nicknameH2 = document.createElement('h2')

    nameH2.textContent = 'Name: ' + this.name
    ageH2.textContent = 'Age: ' + this.age
    nicknameH2.textContent = 'Nickname: ' + this.nickname

    mySection.appendChild(nameH2);
    mySection.appendChild(ageH2);
    mySection.appendChild(nicknameH2);
};

Person.render();
