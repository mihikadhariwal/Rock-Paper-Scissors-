window.onload=() =>{
    const buttons=document.querySelectorAll('#buttons');
    const user=document.querySelector('#userchoice');
    const comp=document.querySelector('#computerchoice');
    const result=document.querySelector('#results');

    document.getElementById("userchoice").innerHTML="";
    document.getElementById("computerchoice").innerHTML="";
    result.innerHTML="";

    buttons.forEach(button =>{
        button.addEventListener('click', (e) =>{
            if(e.target.innerText==='✊'){
                userchoice="rock";
                // console.log('Your choice is '+userchoice);
                user.innerHTML=userchoice;
                computerschoice();
                results();
            }
            if(e.target.innerText==='🖐'){
                userchoice="paper";
                //console.log('Your choice is '+userchoice);
                user.innerHTML=userchoice;
                computerschoice();
                results();
            }
            
            else if(e.target.innerText==='✌'){
                userchoice="scissors";
                //console.log('Your choice is '+userchoice);
                user.innerHTML=userchoice;
                computerschoice();
                results();
            }
            
            else if(e.target.innerText==='🛑'){
                //userchoice="stop";
                document.getElementById("userchoice").innerHTML="";
                document.getElementById("computerchoice").innerHTML="";
                result.innerHTML="";
            }
            
        })
    })

    function computerschoice(){
        var choice;
        // return Math.floor(Math.random() * (max - min + 1) ) + min. => Here we are using numbers 0,1,2. therefore, max is 2 and min is 0
        choice= Math.floor(Math.random() * 3 ) +0;
        if(choice==0){
        //console.log("comp choice is rock");
        compchoice="rock"
        comp.innerHTML=compchoice;
       
    }
        else if(choice==1){
        //console.log("comp choice is paper");
        compchoice="paper"
        comp.innerHTML=compchoice;
       // results();
    }
        else if(choice==2){
        //console.log("comp choice is scissors");
        compchoice="scissors"
        comp.innerHTML=compchoice;
        //results();
    } 
}

function results(){
    if(userchoice=="rock" && compchoice=="rock"){
        result.innerHTML="Tie!"
    }
    else if(userchoice=="rock" && compchoice=="paper"){
        result.innerHTML="You Lose!"
    }
    else if(userchoice=="rock" && compchoice=="scissors"){
        result.innerHTML="You Win!"
    }
    else if(userchoice=="paper" && compchoice=="rock"){
        result.innerHTML="You Win!"
    }
    else if(userchoice=="paper" && compchoice=="paper"){
        result.innerHTML="Tie!"
    }
    else if(userchoice=="paper" && compchoice=="scissors"){
        result.innerHTML="You Lose!"
    }
    else if(userchoice=="scissors" && compchoice=="rock"){
        result.innerHTML="You Lose!"
    }
    else if(userchoice=="scissors" && compchoice=="paper"){
        result.innerHTML="You Win!"
    }
    else if(userchoice=="scissors" && compchoice=="scissors"){
        result.innerHTML="Tie!"
    }
}

}



