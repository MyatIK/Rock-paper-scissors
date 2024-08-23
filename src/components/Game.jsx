import Button from "./Button"
import Scissors from '../assets/images/icon-scissors.svg';
import Paper from '../assets/images/icon-paper.svg';
import Rock from '../assets/images/icon-rock.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Game({choice,setChoice}){
    const[computerChoice,setComputerChoice]=useState(null);
    const[result,setResult]=useState('');
    const navigate= useNavigate();
    
    const computerChoose=()=>{
        let choices=['rock','paper','scissors'];
        const randomPick=choices[Math.floor(Math.random()*2)];
        setComputerChoice(randomPick);
    }
    let userChoice,main,secondary;
    if (choice == 'rock'){
        userChoice=Rock;
        secondary='FireBrick';
        main='Crimson';
    }else if(choice == 'paper'){
        userChoice=Paper;
        main='Blue';
        secondary='RoyalBlue';
    }else if(choice == 'scissors'){
        userChoice=Scissors;
        main='Orange';
        secondary='Peru';
    }
    
    

    


    return(

        <div className="flex w-3/5 justify-between text-white font-bold items-center h-4/5 mt-20">
            <div>
                <p>YOU PICKED</p>
                <div className='h-40 w-40 rounded-full absolute z-10'>
                    <Button src={userChoice} main={main} secondary={secondary}/>

                </div>
                

            </div>
            <div>
                <p>THE HOUSE PICKED</p>
                <div className="h-40 w-40 bg-slate-800 opacity-40 rounded-full mt-20"></div>

            </div>

        
        </div>
    )
}

export default Game