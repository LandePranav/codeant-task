import logo from "../assets/logo.svg";
import home from "../assets/home.svg" ;
import code from "../assets/code.svg" ;
import cloud from "../assets/cloud.svg" ;
import manual from "../assets/manual.svg" ;
import setting from "../assets/setting.svg" ;
import support from "../assets/support.svg" ;
import logout from "../assets/logout.svg" ;

export default function PcNavbar(){
    return (
        <>
            <aside className="hidden w-1/4 min-w-[175px] lg:w-1/5 sm:flex h-screen p-2">
                <div className="flex flex-col h-full justify-between pb-4 items-center">
                    <div className="flex flex-col w-full px-4 gap-4 z-10">
                            <div className="flex w-full gap-2 font-thin text-lg items-center py-2">
                                <img src={logo} alt="logo" className="w-6 h-6" />
                                CodeAnt AI
                            </div>
                                        <select className="rounded-lg border px-2 py-1 border-[#D5D7DA]" >
                                            <option value="zenith" >
                                                zenith
                                            </option>
                                        </select>
                                        <div className="flex w-full gap-2">
                                            <img src={home} alt="home" className="w-6 h-6" />
                                            Repositories
                                        </div>
                                        <div className="flex w-full gap-2">
                                            <img src={code} alt="code" className="w-6 h-6" />
                                            AI Code Review
                                        </div>
                                        <div className="flex w-full gap-2">
                                            <img src={cloud} alt="cloud" className="w-6 h-6" />
                                            Cloud Security
                                        </div>
                                        <div className="flex w-full gap-2">
                                            <img src={manual} alt="manual" className="w-6 h-6" />
                                            How to Use
                                        </div>
                                        <div className="flex w-full gap-2">
                                            <img src={setting} alt="setting" className="w-6 h-6" />
                                            Settings
                                        </div>
                    </div>
                    <div className="flex flex-col w-full px-4 gap-2 z-10">
                        <div className="flex w-full gap-2">
                            <img src={support} alt="support" className="w-6 h-6" />
                            Support
                        </div>
                        <div className="flex w-full gap-2">
                            <img src={logout} alt="logout" className="w-6 h-6" />
                            Logout
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}