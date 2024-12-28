import { useContext, useEffect, useState } from "react";
import refresh from "../assets/refresh.svg";
import add from "../assets/add.svg";
import searchLogo from "../assets/search.svg";
import dot from "../assets/dot.svg";
import size from "../assets/size.svg";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


export default function Repo() {

    const [repos, setRepos] = useState([]);
    const [filteredRepo, setFilteredRepo] = useState(repos);
    const [search, setSearch] = useState("");
    const {username} = useContext(userContext);
    const currDate = new Date();
    console.log(currDate);
    const navigate = useNavigate();

    const getRepoData = async (username) => {
        try {
            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            if(res.ok){
                const data = await res.json();
                data.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at));
                setRepos(data);
                setFilteredRepo(repos);
            }else{
                throw new Error("Failed to fetch!");
            }
        } catch (error) {
            console.log("Error while fetching repo : ", error) ;
        }
    }

    useEffect(()=>{
        getRepoData(username);
    },[username]);

    useEffect(()=>{
        if(search !== ""){
            setFilteredRepo(repos.filter((repo) => repo.name.toLowerCase().includes(search.toLowerCase())) ) ;
        }
        else{
            setFilteredRepo(repos);
        }
    },[search,repos,username]);

    useEffect(()=>{},[filteredRepo]);

    const timeDiff = (currDate,published_at) => {
        const publishedDate = new Date(published_at);
        const diffInTime = currDate - publishedDate;
        const diffInDays = Math.floor(diffInTime/(1000*60*60*24));
        return diffInDays;
    }

    return(
        <main className="h-full">
            <div className="border-b border-b-[#E9EAEB] pb-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-col">
                        <h2>
                            Repositories
                        </h2>
                        <p className="">
                            {repos.length} total repositories
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={()=> navigate(0)} className="flex gap-2 rounded-lg border border-[#D5D7DA] px-2 py-1 items-center justify-center">
                            <img src={refresh} alt='refresh' className="w-4 h-4" />
                            Refresh All
                        </button>
                        <button className="flex text-white bg-blue-500 gap-2 rounded-lg border border-[#D5D7DA] px-2 py-1 items-center justify-center">
                            <img src={add} alt='add' className="w-4 h-4" />
                            Add Repository
                        </button>
                    </div>
                </div>
                <div className="py-2 relative">
                    <input className="rounded-lg w-full border border-[#D5D7DA] sm:w-1/2 px-2 pl-8 py-1" type="text" name="search" placeholder="Search Repositories" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <img src={searchLogo} className="w-6 h-6 absolute top-[13px] left-2" alt="searchLogo" />
                </div>
            </div>
            <div className="h-[75%] sm:h-[85%] overflow-y-auto">
                {filteredRepo.map((repo) => (
                    <div key={repo.name} className="w-full hover:bg-[#F5F5F5] gap-1 py-2 flex flex-col border-b border-[#D5D7DA]">
                        <div className="flex items-center gap-3">
                            <h3>
                                {repo.name}
                            </h3>
                            <p className="text-[#175CD3] text-sm text-light px-2 py-0.5 rounded-full bg-[#EFF8FF] border border-[#B2DDFF]">
                                {repo.visibility}
                            </p>
                        </div>
                        <div className="flex justify-start gap-[24px] sm:gap-10 text-sm ">
                            <p className="flex gap-2 items-center">
                                {repo.language}
                                <img src={dot} alt="dot" className="w-2 h-2" />
                            </p>
                            <p className="flex gap-2 items-center text-nowrap">
                                <img src={size} alt="size" className="w-3 h-3" />
                                {repo.size} KB
                            </p>
                            <p className="flex gap-2  items-center text-nowrap">
                                {
                                    timeDiff(currDate, repo.updated_at) > 0 ?
                                    (   
                                        <p> 
                                            Updated {timeDiff(currDate, repo.updated_at)} days ago
                                        </p>
                                    ) : (
                                        <p>
                                            Updated Today
                                        </p>
                                    )
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}