import { createContext, useState } from "react";

export const userContext = createContext();


export default function UserContext({children}) {
    const [username, setUsername] = useState("LandePranav");
    const users = [
        "LandePranav",
        "notcostheta",
        "rohitramteke1",
        "Bhushan-chanore",
    ]

    return (
        <userContext.Provider value={{username,setUsername, users}}>
            {children}
        </userContext.Provider>
    );
}