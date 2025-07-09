function init() {

    const gridElem = document.querySelector('.grid')
    const scoreElem = document.querySelector('#score-display')
    const cells = []
    const gridWidth = 10
    const numOfCells = gridWidth * gridWidth

    let duckPosition = 10
    let score = 0
    
    function clickDuck(event){
        if(event.target.classList.contains('duck')){
            score += 10
            scoreElem.textContent = `Score ${score}`
        }
        
    }
    function createGrid() {
        //for every cell we require create a div
        //append cell to our grid

        for (let i = 0; i < numOfCells; i++) {
            const cellElem = document.createElement('div')
            // cellElem.classList.add('duck') 
            cellElem.textContent = i // display index 1,2...
            cellElem.addEventListener('click', clickDuck)
            cells.push(cellElem) //add the cellElem into our cells array
            gridElem.appendChild(cellElem) 

        }
        console.log(cells)
    }

    function addDuck() {
        cells[duckPosition].classList.add('duck')
    }

    function removeDuck() {
        cells[duckPosition].classList.remove('duck')
    }

    function play() {
        setInterval(() => {
            removeDuck()
            duckPosition = Math.floor(Math.random() * numOfCells)
            addDuck()
        }, 3000)
    }

    
    createGrid()
    play()



}
document.addEventListener('DOMContentLoaded', init)