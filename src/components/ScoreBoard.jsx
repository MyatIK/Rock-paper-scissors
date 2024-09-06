import Logo from '../assets/images/logo.svg';


function ScoreBoard(){
    return(
        <>
            <div className='border-2 w-full md:w-3/5 border-slate-200 rounded-md flex justify-between p-5'>
                <img src={Logo} alt="rock-paper-scissors logo" className='h-14 md:h-20'/>
                <div className='bg-white rounded-md w-24 md:w-32 h-24 grid justify-items-center items-center'>
                    <h3 className='text-indigo-900'>SCORE</h3>
                    <h1 className='font-bold text-xl md:text-2xl'>Number</h1>
                </div>

        
            </div>

        </>
        
    )
}

export default ScoreBoard