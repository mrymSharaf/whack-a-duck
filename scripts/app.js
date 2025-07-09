function init() {

    const gridElem = document.querySelector('.grid')
    const scoreElem = document.querySelector('#score-display')
    const audioElm = document.querySelector('#quack')
    const cells = []
    const gridWidth = 10
    const numOfCells = gridWidth * gridWidth

    let duckPosition = 10
    let score = 0
    let totalDucks = 0

    function clickDuck(event) {
        if (event.target.classList.contains('duck')) {
            audioElm.pause()
            audioElm.currentTime = 0
            score += 10
            scoreElem.textContent = `Score ${score}`
            randomDuckPlace()
            audioElm.play()
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
        totalDucks++
    }

    function removeDuck() {
        cells[duckPosition].classList.remove('duck')
    }

    function endGame(){
        alert("Game Ended, Your Score is: " + score)
        score = 0
        scoreElem.textContent = 'Score is 0'
        totalDucks = 0
        
    }

    function play() {
         setInterval(() => {
            if (totalDucks <= 10) {
                removeDuck()
                duckPosition = Math.floor(Math.random() * numOfCells)
                addDuck()
            } else{
                endGame()
            }
        }, 2000)
    }

    function randomDuckPlace(){
        removeDuck()
        duckPosition = Math.floor(Math.random() * numOfCells)
        addDuck()
    }

    createGrid()
    play()
    // endGame()



}
document.addEventListener('DOMContentLoaded', init)