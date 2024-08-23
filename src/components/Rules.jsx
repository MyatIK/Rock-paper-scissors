import Close from '../assets/images/icon-close.svg';
import RuleImage from '../assets/images/image-rules.svg';


function Rules(props){
  
    

    return(
        <div className='bg-slate-100 md:bg-black h-full md:bg-opacity-50 w-full flex justify-center items-center fixed top-0 left-0 right-0 z-50'>
            <div className="w-3/4 md:w-1/4 bg-slate-100 relative p-5 rounded-md">
                <h1 className="text-cyan-950 font-bold text-3xl">RULES</h1>
                <img src={Close} alt='close icon' className='h-4 w-4 -bottom-20 right-1/2 absolute md:right-5 md:top-5' onClick={props.onClick}/>
                <div className='flex justify-center items-center m-5'>
                    <img src={RuleImage} alt='Rules for the game'/>


                </div>
        
    
            </div> 

        </div>
        
        

        
         
    )
}

export default Rules