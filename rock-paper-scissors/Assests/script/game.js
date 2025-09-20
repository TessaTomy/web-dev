const game = ()=>{
    let pscore=0;
    let cscore=0;

    const startGame = ()=>
    {
        const playbtn  = document.querySelector(".intro button");
        const introscreen =document.querySelector(".intro");
        const match =document.querySelector(".match");

        playbtn.addEventListener("click",()=>
            {
                introscreen.classList.add("fadeout");
                match.classList.add("fadein");
            }
        );
    };

    // play match

    const playmatch=()=>{
        const option=document.querySelectorAll('.option button');
        const playerhand=document.querySelector('.player-hand');
        const computerhand=document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');


        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation="";
            });
        });
        // computer option
        const computeroption=['rock','paper','scissors'];

        option.forEach(option=>{
            option.addEventListener('click',function(){
                const computerno=Math.floor(Math.random()*3);
                const computerChoice=computeroption[computerno];
                // compare function
                setTimeout(()=>{
                    compare(this.textContent,computerChoice);
                    updateScore();
                    //update images
                    playerhand.src= `./Assests/images/${this.textContent}.png`;
                    computerhand.src= `./Assests/images/${computerChoice}.png`;
                }, 2000)
                // animation
                playerhand.src= `./Assests/images/rock.png`;
                computerhand.src= `./Assests/images/rock.png`;
                playerhand.style.animation="shakeplayer 2s ease";
                computerhand.style.animation="shakecomp 2s ease";
            });
        });
        
    };

    // update function
    const updateScore=()=>{
        const playerScore=document.querySelector('.player-score p');
        const computerScore=document.querySelector('.computer-score p');
        const winnername=document.querySelector('.victory h2');
        const winnerimg=document.querySelector('.victory img');
        playerScore.textContent=pscore;
        computerScore.textContent=cscore;

        if(pscore==3)
        {
            winnername.textContent="You've outsmarted the computer!";
            winnerimg.src=`./Assests/images/comp_crying.png`;
            setvisible();
        }
        else if(cscore==3)
        {
            winnername.textContent="The Computer Rules This Round!";
            winnerimg.src=`./Assests/images/user_fail.png`;
            setvisible();
        }
    };

    // comparison function
    const compare=(playerchoice,computerchoice)=>{
        const winner=document.querySelector('.winner');
        // checking tie
        if(playerchoice === computerchoice)
        {
            winner.textContent="It's a Tie !!";
            return;
        }
        // check for rock
        if(playerchoice === "rock")
        {
            if(computerchoice=="scissors")
            {
                winner.textContent="Player Wins !!";
                pscore++;
                return;
            }
            else
            {
                winner.textContent="Computer Wins !!";
                cscore++;
                return;
            }
        }
        // check for paper
        if(playerchoice === "paper")
            {
                if(computerchoice=="scissors")
                {
                    winner.textContent="Computer Wins !!";
                    cscore++;
                    return;
                }
                else
                {
                    winner.textContent="Player Wins !!";
                    pscore++;
                    return;
                }
            }
        //check for scissors
        if(playerchoice === "scissors")
            {
                if(computerchoice=="paper")
                {
                    winner.textContent="Player Wins !!";
                    pscore++;
                    return;
                }
                else
                {
                    winner.textContent="Computer Wins !!";
                    cscore++;
                    return;
                }
            }
    };
    const setvisible = ()=>
        {
            const victory =document.querySelector(".victory");
            const match =document.querySelector(".match");
            match.classList.remove("fadein");
            victory.classList.add("fadein");
               
        };
    startGame();
    playmatch();
};

game();