import Link from "next/link";
import { FaHome, FaInstagram } from "react-icons/fa";
import { FaDiagramProject, FaSquareXTwitter } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { IoLogoGithub, IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";


export default function Sidebar() {
    const linkStyle = "flex items-center px-2 py-1 text-base font-normal text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-blue-700";
    const iconStyle = "w-6 h-6 text-white transition duration-75 dark:text-blue-400  group-hover:text-blue-400 dark:group-hover:text-blue-400 ";
    const textTyle = "ml-3";

    return (
        <div className=" flex flex-col p-4 bg-red-0">

            <div>
                <Link href="/screens/home" className={linkStyle}>
                    <FaHome className={iconStyle} />
                    <span className={textTyle}>Home</span>
                </Link>
                <Link href="#" className={linkStyle}> {/* /screens/experience */}
                    <MdWorkHistory className={iconStyle} />
                    <span className={textTyle}>Experience</span>
                </Link>
                <Link href="#" className={linkStyle}> {/* /screens/skills */}
                    <GiSkills className={iconStyle} />
                    <span className={textTyle}>Skills</span>
                </Link>
                <Link href="#" className={linkStyle}> {/* /screens/certifications */}
                    <PiCertificateFill className={iconStyle} />
                    <span className={textTyle}>Certifications</span>
                </Link>
                <Link href="#" className={linkStyle}> {/* /screens/education */}
                    <IoSchoolSharp className={iconStyle} />
                    <span className={textTyle}>Education</span>
                </Link>
                <Link href="#" className={linkStyle}> {/* /screens/projects */}
                    <FaDiagramProject className={iconStyle} />
                    <span className={textTyle}>Projects</span>
                </Link>
                <Link href="#" className={linkStyle}> {/* /screens/contacts */}
                    <RiContactsBook3Fill className={iconStyle} />
                    <span className={textTyle}>Contacts</span>
                </Link>
            </div>

            <div className="flex flex-col items-center py-14 gap-2" style={{ height: 'full' }}>
                <div className="flex flex-col items-center gap-3">
                    <a href="https://www.linkedin.com/in/alfredo-martins-a928a217a/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin size={35} color="white" />
                    </a>

                    <a href="https://github.com/CodeTyperPro" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub size={35} color="white" />
                    </a>

                    <a href="https://www.instagram.com/alfredo.martins_/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={35} color="white" />
                    </a>

                    <a href="https://twitter.com/AlfredoMartins0" target="_blank" rel="noopener noreferrer">
                        <FaSquareXTwitter size={35} color="white" />
                    </a>


                </div>

                <div className="bg-white" style={{ width: '5px', height: '200px' }}>

                </div>
            </div>
        </div>
    );
} 