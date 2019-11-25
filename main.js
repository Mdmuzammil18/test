const names = [{username: 'Smith', age: 18},
 {username: 'David', age: 25},
 {username: 'john', age: 34},
 {username: 'Mike', age: 42},
 {username: 'Mark', age: 08},
 {username: 'Maria', age: 52},
 {username: 'Joey', age: 65},
 {username: 'Clark', age: 71},
 {username: 'Ricky', age: 22},
 {username: 'Don', age: 49},
];

// console.log(names);
for(let people of names){
    people['username']

    let h1 =document.createElement('p');
    let h2 = document.createElement('p');
    h1.textContent = ('Username:' + ' ' + people['username']) 
    h1.setAttribute('class', 'demo');
    document.body.appendChild(h1);
    h2.textContent =('Age:' + ' ' +  people['age']) 
    h2.setAttribute('class', 'demo');
    document.body.appendChild(h2);

    if(people['age'] <= 20){
        h1.style.backgroundColor = 'blue';
        h2.style.backgroundColor = 'blue';
    }
    else if (people['age'] <= 40){
        h1.style.backgroundColor = 'green';
        h2.style.backgroundColor = 'green';
    }
    else if (people['age'] <= 60){
        h1.style.backgroundColor = 'yellow';
        h2.style.backgroundColor = 'yellow';
    }else {
        h1.style.backgroundColor = 'red';
        h2.style.backgroundColor = 'red';
    }

}



