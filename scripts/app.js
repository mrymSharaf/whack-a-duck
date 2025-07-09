function init() {

    const gridElem = document.querySelector('.grid')
    const cells = []
    const gridWidth = 10
    const numOfCells = gridWidth * gridWidth

    let duckPosition = 10

    function createGrid() {
        //for every cell we require create a div
        //append cell to our grid

        for (let i = 0; i < numOfCells; i++) {
            const cellElem = document.createElement('div')
            // cellElem.classList.add('duck') 
            cellElem.textContent = i // display index 1,2...
            cells.push(cellElem) //add the cellElem into our cells array
            gridElem.appendChild(cellElem) //
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