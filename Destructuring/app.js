//Destructuring Assignment

let a,b;
[a,b] = [100,200];
// rest pattern 


[a,b,c,...rest] = [100,200,300,400,500];
[a,b] = [100,200];

({a,b} = {a:100,b:200 ,c:300,d:400, e:500});
({a,b, ...rest} = {a:100,b:200 ,c:300,d:400, e:500});

//// Array Destructuring
//const people = ['John' ,'Beth', 'Mike'];
//const[person1,person2,person3] = people;
//console.log(person1,person2,person3) = people;
//console.log(person1,person2,person3);


//parse array returned from function

//function getPeople(){
//    return ['Jonn','beth','mike'];
//}
//let person1, person2, person3;
//
//[person1,person2,person3] = getPeople();
//console.log(person1,person2,person3);

//object desturing

const person = {
    name: 'harsha',
    age: 20,
    city:'mumbai',
    gender:'female',
    sayHello: function(){
    console.log('helo');
}
}
//old ess
//const name = person.name,
//    age = person.age,
//      city = person.city;

//new es6 destructurinh
const {name,age,city,sayHello} = person;
console.log(name,age,city);

sayHello();
    
