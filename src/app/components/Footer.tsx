import { MdStarBorder } from "react-icons/md";
import { PiGitForkThin } from "react-icons/pi";

export default function Footer() {
    return (
        <div className="bg-yellow-0">
            <footer className="bg-gray-0 text-gray-500 text-center w-screen">
                <div className="flex flex-col items-center">
                    <span>CodeTyper &copy; {new Date().getFullYear()} Alfredo Martins, Hungary. All rights reserved.</span>
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row items-center">
                            <MdStarBorder />
                            <span>6,419</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <PiGitForkThin />
                            <span>3,704</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
} 