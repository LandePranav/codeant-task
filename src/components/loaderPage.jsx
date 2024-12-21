import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

export default function LoaderPage() {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/home');
        }, timer * 1000); // Redirection after countdown seconds

        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [navigate, timer]);

    return (
        <div className="flex flex-col w-screen h-dvh items-center justify-center">
            NO BACKEND YET...
            <br />
            <br />
            Redirecting in {timer} sec ...
            <br />
            <br />
            <DotLoader color="#3B82F6" />
        </div>
    );
}
