let playerScore=1,computerScore=1;
let images = document.getElementsByTagName("img");
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        this.classList.add("img-clicked");
    });
    images[i].addEventListener("animationend", function() {
        this.classList.remove("img-clicked");
    });
}
let h2s = document.querySelectorAll(".opera > h2");
for(let i = 0; i < h2s.length; i++) {
    h2s[i].addEventListener("click", function() {
        this.classList.add("img-clicked");
    });
    h2s[i].addEventListener("animationend", function() {
        this.classList.remove("img-clicked");
    });
}
for(let i=0;i<3;i++){
    document.getElementsByClassName("sign")[i].addEventListener("click",function(){
        let computersMove=Math.floor(Math.random()*3)+1;
        let clickedName=this.classList;
        if(clickedName.contains("scissors"))
            scissors(computersMove);
        else if(clickedName.contains("paper"))
            paper(computersMove);

        else if(clickedName.contains("rock")) rock(computersMove);

       
    });
    document.getElementsByClassName("opera")[0].addEventListener("click",function(){
        document.getElementsByClassName("mover")[0].innerText="Make a Move";
        computerScore=0;
        playerScore=0;
        document.getElementsByClassName("computer")[0].innerText="computer: 0";
        document.getElementsByClassName("player")[0].innerText="Player: 0";
    });

}

let scissors=(computersMove)=>{
    console.log(computersMove);

    if(computersMove===1){
        document.getElementsByClassName("player")[0].innerText="Player:"+" "+ (playerScore++);
        document.getElementsByClassName("mover")[0].innerText="Player Wins";
    }
   else if(computersMove==3){
        document.getElementsByClassName("computer")[0].innerText="computer:"+" "+ (computerScore++);
        document.getElementsByClassName("mover")[0].innerText="Computer Wins";
        
    }
    else{
        document.getElementsByClassName("mover")[0].innerText="Draw";
    }
}



let paper=(computersMove)=>{
    console.log(computersMove);
    if(computersMove===1){
        document.getElementsByClassName("player")[0].innerText="Player:"+" "+ (playerScore++);
        document.getElementsByClassName("mover")[0].innerText="Player Wins";
    }
   else if(computersMove==3){
        document.getElementsByClassName("computer")[0].innerText="computer:"+" "+ (computerScore++);
        document.getElementsByClassName("mover")[0].innerText="Computer Wins";
        
    }
    else{
        document.getElementsByClassName("mover")[0].innerText="Draw";
    }
}


let rock=(computersMove)=>{
    console.log(computersMove);
    if(computersMove===3){
        document.getElementsByClassName("player")[0].innerText="Player:"+" "+ (playerScore++);
        document.getElementsByClassName("mover")[0].innerText="Player Wins";
    }
   else if(computersMove==2){
        document.getElementsByClassName("computer")[0].innerText="computer:"+" "+ (computerScore++);
        document.getElementsByClassName("mover")[0].innerText="Computer Wins";
        
    }
    else{
        document.getElementsByClassName("mover")[0].innerText="Draw";
    }
}