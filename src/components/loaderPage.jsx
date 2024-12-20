import { useState } from 'react';
import  {useNavigate} from 'react-router-dom';
import { DotLoader } from 'react-spinners';

export default function LoaderPage() {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5) ;

    setTimeout(() => {
        navigate('/home') ;
    }, 3000);

    setInterval(()=>{
        setTimer(prev => prev - 1);
    },1000);

    return (
        <div className="flex flex-col w-screen h-dvh items-center justify-center">
            NO BACKEND YET...
            <br/><br/>
            Redirecting in {timer} sec ..
            <br/><br/>
            <DotLoader color='#3B82F6' />
        </div>
    );
}