import logo from "../assets/logo.svg";
import home from "../assets/home.svg" ;
import code from "../assets/code.svg" ;
import cloud from "../assets/cloud.svg" ;
import cross from "../assets/cross.svg" ;
import manual from "../assets/manual.svg" ;
import setting from "../assets/setting.svg" ;
import support from "../assets/support.svg" ;
import logout from "../assets/logout.svg" ;
import hamburger from "../assets/hamburger.svg" ;
import { useContext, useState } from "react";
import { userContext } from "../context/userContext";

export default function MobileNavbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const {username, setUsername, users} = useContext(userContext);

    return (
        <nav>
            <div className="flex w-screen justify-between px-3 py-3 sm:hidden border border-b-[#D5D7DA]">
                <div className="flex w-full gap-2 font-thin text-lg items-center">
                    <img src={logo} alt="logo" className="w-6 h-6" />
                    CodeAnt AI
                </div>
                {!isNavOpen ? (
                    <div 
                        onClick={()=> setIsNavOpen(!isNavOpen)}
                        className="sm:hidden">
                        <img src={hamburger} alt="hamburger" className="w-6 h-6" />
                    </div>
                ) : (
                    <div
                        onClick={()=> setIsNavOpen(!isNavOpen)}
                        className="sm:hidden">
                        <img src={cross} alt="cross" className="w-6 h-6" />
                    </div>
                )}
            </div>
            {isNavOpen && (
                <div className="flex flex-col w-full sm:hidden px-4 gap-2 z-10 pt-2">
                    <select value={username || "LandePranav"} onChange={(e) => setUsername(e.target.value)} className="rounded-lg border px-2 py-1 border-[#D5D7DA]" >
                        {
                            users.map((user) => 
                                <option key={user} value={user}>
                                    {user}
                                </option>
                            )
                        }
                    </select>
                    <div className="flex w-full gap-2 pl-3">
                        <img src={home} alt="home" className="w-6 h-6" />
                        Repositories
                    </div>
                    <div className="flex w-full gap-2 pl-3">
                        <img src={code} alt="code" className="w-6 h-6" />
                        AI Code Review
                    </div>
                    <div className="flex w-full gap-2 pl-3">
                        <img src={cloud} alt="cloud" className="w-6 h-6" />
                        Cloud Security
                    </div>
                    <div className="flex w-full gap-2 pl-3">
                        <img src={manual} alt="manual" className="w-6 h-6" />
                        How to Use
                    </div>
                    <div className="flex w-full gap-2 pl-3">
                        <img src={setting} alt="setting" className="w-6 h-6" />
                        Settings
                    </div>
                    <div className="flex w-full gap-2 pl-3">
                        <img src={support} alt="support" className="w-6 h-6" />
                        Support
                    </div>
                    <div className="flex w-full gap-2 pl-3">
                        <img src={logout} alt="logout" className="w-6 h-6" />
                        Logout
                    </div>
                </div>
            ) }
        </nav>
    );
}