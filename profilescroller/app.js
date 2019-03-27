const data = [
    {
        name: 'harsha',
        age: 20,
        gender: 'female',
        looingfor: 'female',
        location: 'london',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: 'harshu',
        age: 22,
        gender: 'female',
        looingfor: 'male',
        location: 'paris',
        image: 'https://randomuser.me/api/portraits/women/84.jpg'
    },
    {
        name: 'harshita',
        age: 21,
        gender: 'female',
        looingfor: 'male',
        location: 'pune',
        image: 'https://randomuser.me/api/portraits/women/89.jpg'
    },
];
const profiles = profileIterator(data);

//next event
document.getElementById('next').addEventListener('click',nextProfile);


//next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;
    
    
    
    document.getElementById('ProfileDisplay').innerHTML = `
<u1 class="list-group">
<li class="list-group-item">Name: ${currentProfile.name}</li>
<li class="list-group-item">Age: ${currentProfile.age}</li>
<li class="list-group-item">Location: ${currentProfile.location}</li>

<li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.looKingfor}</li>
    </u1>
`;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
} 

//profile iterator
function profileIterator(profiles){
    let nextIndex = 0;
     
    
    return{
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
            
        }
    };
}