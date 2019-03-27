////iterators example
//function nameIterators(names) {
//    let nextIndex = 0;
//    
//    return{
//        next: function(){
//        return nextIndex < names.length ?
//        { value: names[nextIndex++], done: false } :
//        { done: true }
//    }
//    }
//}
//// create an array of names
//const namesArr = ['jack','jilli','john'];
////init iterators and pass in the names array 
//const names = nameIterators(namesArr);
//console.log(names.next().value);
//console.log(names.next().value);
//console.log(names.next().value);
//console.log(names.next());
//
////Generator Example
//function* sayNames(){
//    yield  'jack';
//    yield  'jilli';
//    yield  'jhon';
//    
//    
//}
//const name = sayNames();
//console.log(name.next().value);
//console.log(name.next().value);
//console.log(name.next().value);
//console.log(name.next().value);

//id create
function* createIds(){
    let index = 0;
    while(true){
        yield index++;
    }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

