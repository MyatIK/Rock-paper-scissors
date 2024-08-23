import ScoreBoard from "./components/ScoreBoard";
import Rules from "./components/Rules";
import { useState } from "react";
import PlayArea from "./components/PlayArea";

function App() {
  const[clicked,setClicked]=useState(false);

  function handleClick(){
    setClicked(!clicked);
  }
  
  
  return (
    

    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-950 to-indigo-900 relative">
      <div className="pt-10 grid place-items-center h-screen">
        <ScoreBoard/>
        <PlayArea/>
        
        
        <div className="absolute bottom-10 right-10 border border-slate-200 rounded-md text-white w-20 text-sm h-10 grid items-center justify-center" 
          onClick={handleClick}>
            RULES
        </div>

      </div>
      {clicked&&<Rules onClick={handleClick}/>}
      
    </div>
  )
}

export default App
