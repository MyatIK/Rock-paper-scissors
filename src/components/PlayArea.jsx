import { useState } from "react";
import ChoosingStep from "./ChoosingStep";
import Game from './Game';
import { Routes, Route } from "react-router-dom";


function PlayArea(){
    const[choice,setChoice]=useState('');
    return(

        <>
        <Routes>
            <Route path='/' element={<ChoosingStep setChoice={setChoice}/>}/>
            <Route path='/game' element={<Game choice={choice}/>}/>



        </Routes>
        

        
        
        </>
    )
}

export default PlayArea