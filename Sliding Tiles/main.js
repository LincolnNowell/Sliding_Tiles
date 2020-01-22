
let main = document.getElementsByClassName('main');
let alreadyUsed = [];
for(let i = 0; i < 16; i++){
    let randomNum = Math.floor(Math.random() * 16) + 1;
    while(alreadyUsed.includes(randomNum)){
        randomNum = Math.floor(Math.random() * 16) + 1;
    }
    alreadyUsed.push(randomNum);
    main.item(0).innerHTML += `<button class="btn">${randomNum}</button>`;
}



let btn = document.getElementsByClassName('btn');
let innerarr = [];
let arr = Array();
let emptyButton = Math.floor(Math.random() * 16);

class button{
    constructor(btns,empty,row,col){
        this.btn = btns;
        this.empty = empty;
        this.row = row;
        this.col = col;
        this.btn.addEventListener('click',(event) =>{
            let NumMoves = document.getElementById('moves').innerHTML;
            let moves = Number.parseInt(NumMoves);
            document.getElementById('moves').innerHTML = ++moves;

            if(this.col - 1 > -1){
                if(arr[this.col - 1][this.row].empty){
                    let next = arr[this.col - 1][this.row].btn.id;
                    let previous = this.btn.id;
                    document.getElementById(next).style.opacity = '1.0';
                    document.getElementById(previous).style.opacity = '0.0';
                    let store = document.getElementById(next).innerText;
                    document.getElementById(next).innerText = document.getElementById(previous).innerText;
                    document.getElementById(previous).innerText = store;

                    arr[this.col][this.row].empty = true;
                    arr[this.col - 1][this.row].empty = false;
                    
                }
            }if(this.col + 1 < 4){
                if(arr[this.col + 1][this.row].empty){
                    let next = arr[this.col + 1][this.row].btn.id;
                    let previous = this.btn.id;
                    document.getElementById(next).style.opacity = '1.0';
                    document.getElementById(previous).style.opacity = '0.0';
                    let store = document.getElementById(next).innerText;
                    document.getElementById(next).innerText = document.getElementById(previous).innerText;
                    document.getElementById(previous).innerText = store;

                    arr[this.col][this.row].empty = true;
                    arr[this.col + 1][this.row].empty = false;
                }
            }if(this.row + 1 < 4){
                if(arr[this.col][this.row + 1].empty){
                    let next = arr[this.col][this.row + 1].btn.id;
                    let previous = this.btn.id;
                    document.getElementById(next).style.opacity = '1.0';
                    document.getElementById(previous).style.opacity = '0.0';
                    let store = document.getElementById(next).innerText;
                    document.getElementById(next).innerText = document.getElementById(previous).innerText;
                    document.getElementById(previous).innerText = store;

                    arr[this.col][this.row].empty = true;
                    arr[this.col][this.row + 1].empty = false;
                }                   
            }if(this.row - 1 > -1){
                if(arr[this.col][this.row - 1].empty){
                    let next = arr[this.col][this.row - 1].btn.id;
                    let previous = this.btn.id;
                    document.getElementById(next).style.opacity = '1.0';
                    document.getElementById(previous).style.opacity = '0.0';
                    let store = document.getElementById(next).innerText;
                    document.getElementById(next).innerText = document.getElementById(previous).innerText;
                    document.getElementById(previous).innerText = store;

                    arr[this.col][this.row].empty = true;
                    arr[this.col][this.row - 1].empty = false;
                }                   
            }

            let number = 1;
            let win = true;
            for(let Button =0; Button < btn.length; Button++){
                if(btn.item(Button).innerText != number.toString()){
                    win = false;
                }
                number++;
            }
            if(win){
                console.log('win')
                let Wintitle = document.createElement('div');
                Wintitle.innerHTML = `<div id = "Win">
                    <p id="WinTitle">You Win!</p>
                </div>`;
                let main = document.querySelector('.main');
                let body = document.querySelector('body');
                main.remove();
                body.insertBefore(Wintitle,body.children[1]);
            }
        });
        if(this.empty){
            this.btn.style.opacity = "0.0";
        }else{
            this.btn.style.opacity = "1.0";
        }
    }
}

let row = 0, col = 0;
for(let i = 1; i < btn.length + 1; i++){
    btn.item(i - 1).id = i;
    if(i === emptyButton){
        innerarr.push(new button(btn.item(i - 1), true,row++,col));
    }else{
        innerarr.push(new button(btn.item(i - 1), false,row++,col));
    }

    if(i / 4 == Math.floor(i / 4)){
        col++;
        row = 0;
        arr.push(innerarr);
        innerarr = [];
    }
}
