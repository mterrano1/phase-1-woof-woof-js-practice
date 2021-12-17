function init(){

    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(dogs => dogs.forEach(dog => renderOneDog(dog)))
}

//Global Scope Functions and Variables

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function patchDog(dog){
//     fetch(`http://localhost:3000/pups/${dog.id}`,{
//         method: 'PATCH',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(isGoodDog = 'false')
//     })
//     .then(res => res.json())
//     .then(dog => console.log(dog))
// }

// const patchDog = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//     },
//     body: JSON.stringify(isGoodDog = 'false')
// }

//RenderDog Function

function renderOneDog(dog){

    const grabDogInfo = document.querySelector('#dog-info');
    const grabDogBar = document.querySelector('#dog-bar');
    const createSpan = document.createElement('span');

    grabDogBar.appendChild(createSpan);
    createSpan.innerText = dog.name;

    createSpan.addEventListener('click', ()=>{
        const grabDogId = document.querySelector('#dog-info');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const btn = document.createElement('button');
        const id = dog.id;

        if (grabDogId.hasChildNodes){
            removeAllChildNodes(grabDogId)
        }

        function goodDog(dog){
            if (dog.isGoodDog){
                btn.innerText = 'Good Dog!'
            }
            else
            {
                btn.innerText = 'Bad Dog!'
            }
        };

        grabDogInfo.appendChild(img);
        img.src = dog.image;
        grabDogInfo.appendChild(h2);
        h2.innerText = dog.name;
        grabDogInfo.appendChild(btn);
        btn.id = dog.id;
        btn.addEventListener('click', ()=>{
            if (btn.innerText === 'Good Dog!'){
                fetch(`http://localhost:3000/pups/${dog.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({isGoodDog: false}),
            })
                .then(res => res.json())
                .then(dog => console.log(dog))
                btn.innerText = 'Bad Dog!'
            }
            else {
                fetch(`http://localhost:3000/pups/${dog.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({isGoodDog: true}),
            })
                .then(res => res.json())
                .then(dog => console.log(dog))
                btn.innerText = 'Bad Dog!'
                btn.innerText = 'Good Dog!'
            }
        })

        goodDog(dog);
    })
}


document.addEventListener('DOMContentLoaded', init)