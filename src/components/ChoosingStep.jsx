import triangle from '../assets/images/bg-triangle.svg';
import Button from './Button';
import Scissors from '../assets/images/icon-scissors.svg';
import Paper from '../assets/images/icon-paper.svg';
import Rock from '../assets/images/icon-rock.svg';
import { useNavigate } from 'react-router-dom';



function ChoosingStep({setChoice}){
    
    const navigate = useNavigate();

    function handleClick(e){
       setChoice(e.target.id);
       navigate('/game');
    }
  
    return(
        <div className='h-[calc(100vh-14rem)] w-full p-5 md:w-3/5 grid items-center justify-center'>
            <div className='relative'>
                <img src={triangle} alt='background triangle' className='w-60 md:w-80'/>
                <div className='h-40 w-40 rounded-full absolute bottom-40 -right-12  md:-right-10 z-10' onClick={handleClick} id='scissors'>
                    <Button src={Scissors} main='Orange' secondary='Peru' id='scissors' />

                </div>
                <div className='h-40 w-40 rounded-full absolute -bottom-10  md:-bottom-20 right-6 md:right-20 z-10'  onClick={handleClick} id='rock'>
                    <Button src={Rock} main='Crimson' secondary='FireBrick'id='rock'/>

                </div>
                <div className='h-40 w-40 rounded-full absolute bottom-40 -left-10 z-10'  onClick={handleClick} id='paper'>
                    <Button src={Paper} main='Blue' secondary='RoyalBlue' id='paper' />

                </div>
            </div>
           
        </div>
    )
}

export default ChoosingStep