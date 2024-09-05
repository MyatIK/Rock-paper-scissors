import Button from "./Button"
import Scissors from '../assets/images/icon-scissors.svg';
import Paper from '../assets/images/icon-paper.svg';
import Rock from '../assets/images/icon-rock.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Game({choice}){
    const[computerChoice,setComputerChoice]=useState('');
    const[result,setResult]=useState('');
    const navigate= useNavigate();
    
    const computerChoose=()=>{
        let choices=['rock','paper','scissors'];
        const randomPick=choices[Math.floor(Math.random()*2)];
        setComputerChoice(randomPick);
    }
    let userChoice,main,secondary;
    if (choice === 'rock'){
        userChoice=Rock;
        secondary='FireBrick';
        main='Crimson';
    }else if(choice === 'paper'){
        userChoice=Paper;
        main='Blue';
        secondary='RoyalBlue';
    }else if(choice === 'scissors'){
        userChoice=Scissors;
        main='Orange';
        secondary='Peru';
    }
    
    useEffect (()=> {
        computerChoose();
    }, []);
    
    let computer,mainComp,secondaryComp;
    if (computerChoice === 'rock'){
        computer=Rock;
        secondaryComp='FireBrick';
        mainComp='Crimson';
    }else if(computerChoice === 'paper'){
        computer=Paper;
        mainComp='Blue';
        secondaryComp='RoyalBlue';
    }else if(computerChoice ==='scissors'){
        computer=Scissors;
        mainComp='Orange';
        secondaryComp='Peru';

    }
    
    useEffect(()=>{
        const gameResult = ()=>{
            if((choice == 'rock' && computerChoice == 'scissors') ||
                (choice == 'paper' && computerChoice == 'rock') ||
                (userChoice == 'scissors' && computerChoice == 'paper')){
                setResult("You Win")
            }else if(
                (choice == 'rock' && computerChoice == 'paper') ||
                (choice == 'paper' && computerChoice == 'scissors') ||
                (choice == 'scissors' && computerChoice == 'rock')
            ){
                setResult('You Lose')
            }else if(
                (choice == 'rock' && computerChoice == 'rock') ||
                (choice == 'paper' && computerChoice == 'paper') ||
                (choice == 'scissors' && computerChoice == 'scissors')
            ){
                setResult('Draw')
            }
        }

        setTimeout(()=>{
            gameResult();
        },1500);

    },[computer, userChoice])
    

    function handleClick(){
        navigate('/');
    }

    


    return(

        <div className="h-[calc(100vh-14rem)] flex flex-row gap-40 justify-center text-white font-bold mt-10">
            <div>
                <p className="mb-10 flex justify-center text-xl">YOU PICKED</p>
                <div className='h-40 w-40 rounded-full absolute z-10'>
                    <Button src={userChoice} main={main} secondary={secondary}/>

                </div>
                

            </div>
            {result && 
            <div>
                <p className="flex justify-center text-4xl">{result}</p>
                <div className="border border-white rounded-md p-3 mt-10 flex justify-center" onClick={handleClick}>Play Again</div>    
            </div>}

            <div>
                <p className="mb-10 flex justify-center text-xl">THE HOUSE PICKED</p>
                <div className='h-40 w-40  rounded-full absolute z-10'>
                    <Button src={computer} main={mainComp} secondary={secondaryComp}/>

                </div>
                
                

            </div>

        
        </div>

        
    )
}

export default Game