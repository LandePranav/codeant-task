import waterlogo from '../assets/waterlogo.svg';
import logo from '../assets/logo.svg';
import pie from '../assets/pie.svg';
import gitlab from "../assets/gitlab.svg";
import key from "../assets/key.svg";


import { loginLinks } from '../constants/links';


import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [mode, setMode] = useState('saas');
    const selected = 'bg-blue-600 text-white' ;
    const navigate = useNavigate();

    return (
        <div className="flex w-full h-dvh font-inter">
            <div className='hidden items-center justify-center lg:flex w-1/2 relative'>
                <img className='absolute bottom-0 left-0' src={waterlogo} alt='waterlogo' />
                <div className='rounded-3xl bg-white font-bold shadow-custom z-10 relative bottom-24'>
                    <div className='border-b border-gray-200 flex items-center gap-2 p-4'>
                            <img className='w-6 h-6' src={logo} alt='logo' />
                            AI to Detect & Autofix Bad Code
                    </div>
                    <div className='flex justify-evenly items-center text-center p-4'>
                        <div className='flex flex-col m-2'>
                            <div>
                                30+
                            </div>
                            <div className='font-light'>
                                Language Support
                            </div>
                        </div>
                        <div className='flex flex-col m-2'>
                            <div>
                                10K+
                            </div>
                            <div  className='font-light'>
                                Developers
                            </div>
                        </div>
                        <div className='flex flex-col m-2'>
                            <div>
                                100k+
                            </div>
                            <div className='font-light'>
                                Hours Saved
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-3xl bg-white font-bold flex flex-col shadow-custom px-6 py-4 gap-1 z-20 relative -left-40 -bottom-10'>
                    <div className='flex justify-between gap-20'>
                        <img className='w-10 h-10' src={pie} alt='pig img' />
                        <div className='flex flex-col text-sm '>
                            <div className='flex items-center justify-center gap-1 text-blue-600'>
                               <FaArrowUp /> 14 %
                            </div>
                            <div  className='font-light'>
                                This week
                            </div>
                        </div>
                    </div>
                    <div className='font-semibold'>Issues Fixed</div>
                    <div className='text-3xl'>500k+</div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center bg-[#FAFAFA] lg:w-1/2 p-4 gap-2'>
                <div className='flex flex-col items-center w-full border border-[#E9EAEB] rounded-lg p-4 gap-3 bg-white'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt='logo' className='w-6 h-6' />
                        <div className='font-satoshi text-xl'>
                            CodeAnt AI
                        </div>
                     </div>
                     <h2>
                        Welcome to CodeAnt AI
                     </h2>
                     <div className='flex w-full gap-2'>
                        <div 
                            onClick={() => setMode('saas')}
                            className={"w-full cursor-pointer text-center py-2 rounded-lg border border-[#E9EAEB] "  + (mode === 'saas' ? selected : '')}>
                            SAAS
                        </div>
                        <div
                            onClick={() => setMode('self')}
                            className={'w-full cursor-pointer text-center py-2 rounded-lg border border-[#E9EAEB] ' + (mode === 'self' ? selected : '')}>
                            Self Hosted
                        </div>
                     </div>
                     {mode === 'saas' ? (
                        loginLinks.map( (one) => 
                            <div 
                                key={one.name}
                                onClick={() => navigate(one.link)}
                                className='flex cursor-pointer rounded-lg justify-center items-center border border-[#D8DAE5] w-full sm:w-[60%] gap-2 p-2'
                            >
                                <img src={one.logo} alt='link logo' className='w-6 h-6' />
                                Sign in with {one.name}
                            </div>
                        )
                     ) : (
                        <div className='flex flex-col gap-2 w-full items-center'>
                            <div
                                onClick={() => navigate('/rerouting')}
                                className='flex cursor-pointer rounded-lg justify-center border border-[#D8DAE5] w-full sm:w-[60%] gap-2 p-2' 
                            >
                                <img src={gitlab} alt='link logo' className='w-6 h-6' />
                                Self Hosted GitLab
                            </div>
                            <div
                                onClick={() => navigate('/rerouting')}
                                className='flex cursor-pointer rounded-lg justify-center border border-[#D8DAE5] w-full sm:w-[60%] gap-2 p-2' 
                            >
                                <img src={key} alt='link logo' className='w-6 h-6' />
                                Sign In with SSO
                            </div>
                            <div className='w-full sm:w-[60%] gap-2 p-6'></div>
                            <div className='w-full sm:w-[60%] gap-2 p-6'></div>
                        </div>
                     )}
                </div>
                <div>
                    By signing up you agree to the <span className='font-bold'>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}