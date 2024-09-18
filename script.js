const grid = document.getElementById('grid');

for (let i = 0; i <9; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', () => {
        const successSound = document.getElementById('success-sound')
        const errorSound = document.getElementById('error-sound');


        if(Math.random() > 0.5){
            square.style.backgroundColor= 'green';
            successSound.play();
        }else{
            square.style.backgroundColor = "red";
            errorSound.play();
        }
    })

    grid.appendChild(square);
}