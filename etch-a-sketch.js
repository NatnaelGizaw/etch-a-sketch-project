
// Create a webpage with a 16x16 grid of square divs

    // Idea: create a nested for-loop


// divs all created under one unifying div container
const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-direction: column; ')
for (let i = 0; i < 16; i++) {
    // create a new div for row
    const div_row = document.createElement('div');
    div_row.setAttribute('style', 'border: solid black; height: 60px; display: flex; flex-direction: row; margin: auto;')
    container.appendChild(div_row)

    for (let j = 0; j < 16; ++j) {
        // populate colums for that row created
        const div_column = document.createElement('div');
        div_column.setAttribute('style', 'display: inline-block; border: solid black; width: 60px; height: 60px;');
        div_row.appendChild(div_column);

        // add event listeners here 
        // when the divs are created

        div_column.addEventListener('mouseover', () => {
            div_column.style.backgroundColor = 'black';
        })

    }
}

    // margin: auto;
    // display: inline-block;

