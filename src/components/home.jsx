import MobileNavbar from "./mobileNavbar";
import PcNavbar from "./pcNavbar";
import Repo from "./repo";

export default function Home() {
    return(
        <div className="flex flex-col sm:flex-row w-full h-dvh">
            <MobileNavbar />
            <PcNavbar />
            <div className="w-full h-full flex-grow p-4 bg-[#FAFAFA]">
                <div className="w-full h-full bg-white p-3 rounded-lg border border-[#E9EAEB] ">
                    <Repo />
                </div>
            </div>
        </div>
    );
}