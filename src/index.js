const choreListDiv = document.querySelector('#chore-list')
const eForm = document.querySelector("#new-chore-form")
const deleteBttn = document.querySelector("#chore-list > div:nth-child(3) > button")
//get chores
fetch('http://localhost:3000/chores') 
    .then(resp => resp.json())
    .then(choreArr => {
        choreArr.forEach(choreObj => renderOneCard(choreObj))
    })

//render chores
function renderOneCard(choreObj){
    let chCard = document.createElement('div')
        chCard.classList.add('chore-card')
        chCard.dataset.id = choreObj.id
    
    chCard.innerHTML = `
    <button class="delete-button" data-id="${choreObj.id}">x</button>
    <h3> "${choreObj.title}" </h3>
    <p> Duration: "${choreObj.duration}" </p>
    <input type="text" name="name" value="${choreObj.priority}"/>
    `
    choreListDiv.append(chCard)
}
    // let detH3 = document.createElement('h3')
    //     detH3.dataset.id = choreObj.id
    //     detH3.textContent = choreObj.title

    // let detPar = document.createElement('p')
    //     detPar.dataset.id = choreObj.id
    //     detPar.textContent = choreObj.duration

    // let detInput = document.createElement('input')
    //     detInput.dataset.id = choreObj.id

//post
eForm.addEventListener('submit', event => {
    event.preventDefault()

    let newChoreObj = {
        id: "",
        title: event.target.title.value, 
        duration: event.target.duration.value,
        priority: event.target.priority.value
    }

    fetch('http://localhost:3000/chores', {         //everything within this fetch is for backend
        method: 'POST',
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newChoreObj)
    })
    .then(console.log)
})

choreListDiv.addEventListener('click', event => {
    if(event.target.matches('.delete-button')) deleteCard()
        let cardDiv = event.target.closest('div.chore-card')
})

function deleteCard(){
    
}
