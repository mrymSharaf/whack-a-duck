function init(){

    const gridElem = document.querySelector('.grid')

    function createGrid(){
        //for every cell we require create a div
        //append cell to our grid

        for(let i = 0; i < 100; i++){
            const cellElem = document.createElement('div')
            gridElem.appendChild(cellElem)
            cellElem.textContent = i
        }
    }
        createGrid()
}
document.addEventListener('DOMContentLoaded', init)