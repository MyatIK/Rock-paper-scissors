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

        <div className="h-[calc(100vh-14rem)] text-white font-bold mt-10 w-full p-5 md:w-4/5">
            <div className="flex flex-row gap-20 justify-center">
                <div className="md:w-1/5 ">
                    <p className="mb-10 text-md md:text-xl flex justify-center">YOU PICKED</p>
                    <div className='h-40 w-40 rounded-full absolute z-10 ml-5'>
                        <Button src={userChoice} main={main} secondary={secondary}/>

                    </div>
                    

                </div>
                {result && 
                <div className="md:w-1/5 hidden md:block">
                    <p className="md:text-3xl text-xl flex justify-center mt-16">{result}</p>
                    <div className="border border-white rounded-md p-3 mt-10 flex justify-center hover:text-black hover:bg-slate-200" onClick={handleClick}>Play Again</div>    
                </div>}

                <div className="md:w-1/5">
                    <p className="mb-10 flex justify-center text-md md:text-xl">THE HOUSE PICKED</p>
                    <div className='h-40 w-40 flex jusstify-center  rounded-full absolute z-10 ml-5'>
                        <Button src={computer} main={mainComp} secondary={secondaryComp}/>

                    </div>
                    
                    

                </div>

            </div>
            
            <div className="w-full p-5 mt-20">
                {result && 
                <div className="w-full p-5 md:hidden block">
                    <p className="text-4xl  flex justify-center mt-16">{result}</p>
                    <div className="border border-white rounded-md p-3 mt-10 flex justify-center hover:text-black hover:bg-slate-200" onClick={handleClick}>Play Again</div>    
                </div>}

            </div>
            

        
        </div>

        
    )
}

export default Game