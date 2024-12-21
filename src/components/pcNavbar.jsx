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
import { Link, useLocation, } from "react-router-dom";

export default function PcNavbar(){
    const {username, setUsername, users} = useContext(userContext);
    const selected = "bg-blue-500 text-white fill-white";
    const location = useLocation();
    return (
        <>
            <aside className="hidden w-1/4 min-w-[200px] sm:flex h-screen p-2">
                <div className="flex flex-col w-full h-full justify-between pb-4 items-center">
                    <div className="flex flex-col w-full px-4 gap-4 z-10">
                            <div className="flex font-satoshi w-full gap-2 text-lg items-center py-2">
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
                                        <Link to={"/home"} className={"flex w-full gap-2 pl-2 rounded-lg py-0.5 " + (location.pathname === "/home" ? selected : " ")}>
                                            <img src={home} alt="home" className={"w-6 h-6 " +(location.pathname === "/home" ? "filter invert brightness-0" : "")} />
                                            Repositories
                                        </Link>
                                        <Link to={"/home/codeReview"} className={"flex w-full gap-2 pl-2 rounded-lg py-0.5 " + (location.pathname == "/home/codeReview" ? selected : " ")}>
                                            <img src={code} alt="code" className={"w-6 h-6 " +(location.pathname === "/home/codeReview" ? "filter invert brightness-0" : "")} />
                                            AI Code Review
                                        </Link>
                                        <Link to={"/home/cloudSecurity"} className={"flex w-full gap-2 pl-2 rounded-lg py-0.5 " + (location.pathname == "/home/cloudSecurity" ? selected : " ")}>
                                            <img src={cloud} alt="cloud" className={"w-6 h-6 " +(location.pathname === "/home/cloudSecurity" ? "filter invert brightness-0" : "")} />
                                            Cloud Security
                                        </Link>
                                        <Link to={"/home/userManual"} className={"flex w-full gap-2 pl-2 rounded-lg py-0.5 " + (location.pathname == "/home/userManual" ? selected : " ")}>
                                            <img src={manual} alt="manual" className={"w-6 h-6 " +(location.pathname === "/home/userManual" ? "filter invert brightness-0" : "")} />
                                            How to Use
                                        </Link>
                                        <Link to={"/home/settings"} className={"flex w-full gap-2 pl-2 rounded-lg py-0.5 " + (location.pathname == "/home/settings" ? selected : " ")}>
                                            <img src={setting} alt="setting" className={"w-6 h-6 " +(location.pathname === "/home/settings" ? "filter invert brightness-0" : "")} />
                                            Settings
                                        </Link>
                    </div>
                    <div className="flex flex-col w-full px-4 gap-2 z-10">
                        <Link to={"/home/support"} className="flex w-full gap-2">
                            <img src={support} alt="support" className="w-6 h-6" />
                            Support
                        </Link>
                        <Link to={"/"} className="flex w-full gap-2">
                            <img src={logout} alt="logout" className="w-6 h-6" />
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}