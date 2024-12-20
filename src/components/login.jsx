import waterlogo from '../assets/waterlogo.svg';
import logo from '../assets/logo.svg';
import pie from '../assets/pie.svg';

import { FaArrowUp } from "react-icons/fa";

export default function Login() {
    return (
        <div className="flex w-full h-dvh">
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
            <div className='w-full lg:w-1/2'>
                Login Buttons
            </div>
        </div>
    );
}