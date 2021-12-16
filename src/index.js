function init(){

    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(dogs => dogs.forEach(dog => renderOneDog(dog)))
}

//Global Scope Functions and Variables
const img = document.createElement('img');
const h2 = document.createElement('h2');
const btn = document.createElement('button');

function isGoodDog(dog){
    if (dog.isGoodDog){
        btn.innerText = 'Good Dog!'
    }
    else
    {
        btn.innerText = 'Bad Dog!'
    }
}

// function patchDog(dog){
//     fetch(`http://localhost:3000/pups/${dog.id}`,{
//         method: 'PATCH',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dog)
//     })
//     .then(res => res.json())
//     .then(dog => console.log(dog))
// }

//RenderDog Function
function renderOneDog(dog){
    const grabDogInfo = document.querySelector('#dog-info');
    const grabDogBar = document.querySelector('#dog-bar');
    const createSpan = document.createElement('span');
    grabDogBar.appendChild(createSpan);
    createSpan.innerText = dog.name;
    createSpan.addEventListener('click', ()=>{
        grabDogInfo.appendChild(img);
        img.src = dog.image;
        grabDogInfo.appendChild(h2);
        h2.innerText = dog.name;
        grabDogInfo.appendChild(btn);
        btn.id = dog.id;
        btn.className = 'dog-button'
        let grabBtn = document.querySelector('dog-button')
        isGoodDog(dog);
        // test();
    })
}

// function test(){
//     if (btn.innerText === 'Good Dog!'){
//         btn.innerText = 'Bad Dog!'
//     }
// }

// grabBtn.addEventListener('click', ()=>{
//     console.log('button was clicked')
// })

// function clickBtn(){
//     grabBtn.addEventListener('click', ()=>{
//         console.log('button was clicked')
//     })
// }

document.addEventListener('DOMContentLoaded', init)