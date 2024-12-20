import waterlogo from '../assets/waterlogo.svg';
import logo from '../assets/logo.svg';

export default function Login() {
    return (
        <div className="flex w-full">
            <div className='hidden items-center justify-center sm:flex w-1/2 sm:visible '>
                <img className='absolute -z-1 bottom-0 left-0' src={waterlogo} alt='waterlogo' />
                <div className='rounded-md font-bold shadow-lg'>
                    <div className='border-b border-gray-200 flex gap-2 p-4'>
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
            </div>
            <div className='w-full sm:w-1/2'>
                Login Buttons
            </div>
        </div>
    );
}