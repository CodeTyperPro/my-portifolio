import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";


export default function Sidebar() {
    const linkStyle = "flex items-center px-2 py-1 text-base font-normal text-white rounded-lg dark:text-white hover:bg-blue-200 dark:hover:bg-blue-700";
    const iconStyle = "w-6 h-6 text-white transition duration-75 dark:text-blue-400  group-hover:text-blue-400 dark:group-hover:text-blue-400 ";
    const textTyle = "ml-3";

    return (
        <div className="p-4 bg-red-0">
                <Link href="/screens/home" className={linkStyle}>
                    <FaHome className={iconStyle} />
                    <span className={textTyle}>Home</span>
                </Link>
                <Link href="/screens/experience" className={linkStyle}>
                    <MdWorkHistory className={iconStyle} />
                    <span className={textTyle}>Experience</span>
                </Link>
                <Link href="/screens/skills" className={linkStyle}>
                    <GiSkills className={iconStyle} />
                    <span className={textTyle}>Skills</span>
                </Link>
                <Link href="/screens/certifications" className={linkStyle}>
                    <PiCertificateFill className={iconStyle} />
                    <span className={textTyle}>Certifications</span>
                </Link>
                <Link href="/screens/education" className={linkStyle}>
                    <IoSchoolSharp className={iconStyle} />
                    <span className={textTyle}>Education</span>
                </Link>
                <Link href="/screens/projects" className={linkStyle}>
                    <FaDiagramProject className={iconStyle} />
                    <span className={textTyle}>Projects</span>
                </Link>
                <Link href="/screens/contacts" className={linkStyle}>
                    <RiContactsBook3Fill className={iconStyle} />
                    <span className={textTyle}>Contacts</span>
                </Link>

        </div>
    );
} 