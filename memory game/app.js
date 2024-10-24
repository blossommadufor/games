const cardArray = [
    {
        name: "fries",
        img: "images/grape.jpg"
    },

    {
        name: "burger",
        img: "images/strawberry.jpg"
    },

    {
        name: "hotdog",
        img: "images/orange.jpg"
    },

    {
        name: "ice cream",
        img: "images/banana.jpg"
    },

    {
        name: "milkshake",
        img: "images/cherry.jpg"
    },

    {
        name: "pizza",
        img: "images/kiwi.jpg"
    },

    {
        name: "fries",
        img: "images/grape.jpg"
    },

    {
        name: "burger",
        img: "images/strawberry.jpg"
    },

    {
        name: "hotdog",
        img: "images/orange.jpg"
    },

    {
        name: "ice cream",
        img: "images/banana.jpg"
    },

    {
        name: "milkshake",
        img: "images/cherry.jpg"
    },

    {
        name: "pizza",
        img: "images/kiwi.jpg"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenIds = []
const cardsWon = []
const match = document.querySelector('.match')
const same = document.querySelector('.same')

function createBoard(){
    for( let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank2.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds[1]
    console.log(cards)

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank2.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank2.jpg')
        alert('you have clicked the same image')
    }

    
    if (cardsChoosen[0] == cardsChoosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('clicks', flipCard)
        cards[optionTwoId].removeEventListener('clicks', flipCard)
        cardsWon.push(cardsChoosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/blank2.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank2.jpg')
        // alert('sorry try again')
    }

    resultDisplay.textContent = cardsWon.length


    cardsChoosen = []
    cardsChoosenIds = []

    if (cardsWon.length == cardArray.length/2 ){
        resultDisplay.innerHTML = 'YOU WIN!!!🎉'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    // console.log(cardsChoosen)
    // console.log(cardsChoosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if( cardsChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
