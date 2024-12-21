import CloudSecurity from "./cloudSecurity";
import CodeReview from "./codeReview";
import Manual from "./manual";
import MobileNavbar from "./mobileNavbar";
import PcNavbar from "./pcNavbar";
import Repo from "./repo";
import {Routes, Route} from 'react-router-dom';
import Settings from "./settings";
import Support from "./support";

export default function Home() {
    return(
        <div className="flex flex-col sm:flex-row w-full h-dvh font-inter">
            <MobileNavbar />
            <PcNavbar />
            <div className="w-full h-full flex-grow p-4 bg-[#FAFAFA]">
                <div className="w-full h-full bg-white p-3 rounded-lg border border-[#E9EAEB] ">
                    <Routes>
                        <Route index path="/" element={<Repo />} />
                        <Route path="/codeReview" element={<CodeReview />} />
                        <Route path="/cloudSecurity" element={<CloudSecurity />} />
                        <Route path="/userManual" element={<Manual />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/support" element={<Support />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}