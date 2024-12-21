import logo from "../assets/logo.svg";
import home from "../assets/home.svg" ;
import code from "../assets/code.svg" ;
import cloud from "../assets/cloud.svg" ;
import manual from "../assets/manual.svg" ;
import setting from "../assets/setting.svg" ;
import support from "../assets/support.svg" ;
import logout from "../assets/logout.svg" ;
import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function PcNavbar(){
    const {username, setUsername, users} = useContext(userContext);
    return (
        <>
            <aside className="hidden w-1/4 min-w-[200px] sm:flex h-screen p-2">
                <div className="flex flex-col h-full justify-between pb-4 items-center">
                    <div className="flex flex-col w-full px-4 gap-4 z-10">
                            <div className="flex w-full gap-2 font-thin text-lg items-center py-2">
                                <img src={logo} alt="logo" className="w-6 h-6" />
                                CodeAnt AI
                            </div>
                                        <select value={username || "LandePranav"} onChange={(e) => setUsername(e.target.value)} className="rounded-lg w-full border px-2 py-1 border-[#D5D7DA]" >
                                            {
                                                users.map((user) => 
                                                    <option key={user} value={user}>
                                                        {user}
                                                    </option>
                                                )
                                            }
                                        </select>
                                        <div className="flex w-full gap-2 pl-2">
                                            <img src={home} alt="home" className="w-6 h-6" />
                                            Repositories
                                        </div>
                                        <div className="flex w-full gap-2 pl-2">
                                            <img src={code} alt="code" className="w-6 h-6" />
                                            AI Code Review
                                        </div>
                                        <div className="flex w-full gap-2 pl-2">
                                            <img src={cloud} alt="cloud" className="w-6 h-6" />
                                            Cloud Security
                                        </div>
                                        <div className="flex w-full gap-2 pl-2">
                                            <img src={manual} alt="manual" className="w-6 h-6" />
                                            How to Use
                                        </div>
                                        <div className="flex w-full gap-2 pl-2">
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