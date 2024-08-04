import Image from "next/image";
import ProfilePhoto from '../../assets/Image.png';
import Angola from '../../assets/Angola.png';
import England from '../../assets/England.png';
import Portugal from '../../assets/Portugal.png';
import Cpp from '../../assets/TechStack/Cpp.png';
import ReactImage from '../../assets/TechStack/React.png';
import ReactNative from '../../assets/TechStack/React_Native.png';
import Docker from '../../assets/TechStack/Docker.png';
import Figma from '../../assets/TechStack/Figma.png';
import Flask from '../../assets/TechStack/Flask.png';
import Git from '../../assets/TechStack/Git.png';
import Java from '../../assets/TechStack/Java.png';
import NodeJS from '../../assets/TechStack/NodeJS.png';
import Python from '../../assets/TechStack/Python.png';
import Typescript from '../../assets/TechStack/Typescript.png';
import ELTE from '../../assets/ELTE.png';
import BackgroundProject from '../../assets/BackgroundProject.png';
import GitHub from '../../assets/GitHub.png';
import Certificate from '../../assets/certificate.png';
import TimelineLeft from '../../assets/time_left.png';
import TimelineRight from '../../assets/time_right.png';


import Bomberman from '../../assets/Projects/Bomberman.png';
import Proteja from '../../assets/Projects/Proteja.png';
import PhoneTesting from '../../assets/Projects/Testing.jpg';
import AC_FORCE from '../../assets/Projects/AC_Force.png';
import Blockchain from '../../assets/Projects/Blockchain.png';
import EloSystem from '../../assets/Projects/Elo System - K&H HACK3 2023.png';
import R4C from '../../assets/Projects/R4C.png';
import SongTyper from '../../assets/Projects/SongTyper.png';
import Vacathon from '../../assets/Projects/Vacathon.png';
import PhoneBook from '../../assets/Projects/PhoneBook.png';
import NUMENU from '../../assets/Projects/Numenu.png';
import Boop from '../../assets/Projects/Boop.png';

const data = [
    { id: 1, technology: Cpp, technologyName: 'C++' },
    { id: 2, technology: ReactImage, technologyName: 'React' },
    { id: 3, technology: NodeJS, technologyName: 'Node.js' },
    { id: 4, technology: Git, technologyName: 'Git' },
    { id: 5, technology: Typescript, technologyName: 'TypeScript' },
    { id: 6, technology: ReactNative, technologyName: 'React Native' },
    { id: 7, technology: Figma, technologyName: 'Figma' },
    { id: 8, technology: Java, technologyName: 'Java' },
    { id: 9, technology: Docker, technologyName: 'Docker' },
    { id: 10, technology: Flask, technologyName: 'Flask' },
    { id: 11, technology: Python, technologyName: 'Python' },
];

const project = [
    { id: 1, projectImage: Blockchain, title: 'Blockchain Angola', link: 'https://github.com/AlfredoMartins/blockchain-angola' },
    { id: 2, projectImage: AC_FORCE, title: 'AC Force', link: 'https://github.com/CodeTyperPro/acforce-react-app' },
    { id: 3, projectImage: EloSystem, title: 'Elo System - K&H HACK3 2023', link: 'https://github.com/CodeTyperPro/EloSystem_K-H_HACK3' },
    { id: 4, projectImage: Bomberman, title: 'Bomberman', link: 'https://github.com/CodeTyperPro/bomberman-starforce' },
    { id: 5, projectImage: Boop, title: 'Boop', link: 'https://github.com/CodeTyperPro/boop' },
    { id: 6, projectImage: R4C, title: 'R4C', link: 'https://github.com/CodeTyperPro/R4C' },
    { id: 7, projectImage: SongTyper, title: 'SongTyper', link: 'https://github.com/CodeTyperPro/music-playlist' },
    { id: 8, projectImage: NUMENU, title: 'NUMENU', link: 'https://github.com/CodeTyperPro/NUMENU' },
    { id: 9, projectImage: Proteja, title: 'Proteja Sua Vida', link: 'https://github.com/CodeTyperPro/PSV' },
    { id: 10, projectImage: PhoneTesting, title: 'Phone Testing', link: 'https://github.com/CodeTyperPro/phone-task-testing' },
    { id: 11, projectImage: Vacathon, title: 'Vacathon', link: 'https://github.com/CodeTyperPro/Vacathon' },
    { id: 12, projectImage: PhoneBook, title: 'PhoneBook', link: 'https://github.com/CodeTyperPro/phone-book' },
];

const certificates = [
    { id: 1, title: 'Blockchain from Scratch', link: 'https://www.udemy.com/certificate/UC-7ae80719-9302-4c48-b784-5e36e7bcef1f/' },
    { id: 2, title: 'AI Foundations: ML', link: 'https://www.linkedin.com/learning/certificates/54c46d22f7de418145a6a8ab437793029c159bc4ef2fdee14ed445f24c72b7e5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bt61jGXIwQ52h3cYO2exn%2Fg%3D%3D' },
    { id: 3, title: 'Git Essential Training', link: 'https://www.linkedin.com/learning/certificates/53d2fd6ec4ac282a90d8bf929db6bebd7cd9f5d8172b4045643414fb099bc811?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bt61jGXIwQ52h3cYO2exn%2Fg%3D%3D' },
    { id: 4, title: 'Postman Essential Training', link: 'https://www.linkedin.com/learning/certificates/bfc1a32cf866fe835a2e494f2a38dea25600a664ff6e5f3dbd114bb7d01912d1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bt61jGXIwQ52h3cYO2exn%2Fg%3D%3D' },
    { id: 5, title: 'Decision-Making Strategies', link: 'https://www.linkedin.com/learning/certificates/8d15131a2f808507efc29d104ba390cef3569c0f8eb45eeed03da2944088c9b0' },
    { id: 6, title: 'Problem Solving (Basic)', link: 'https://www.hackerrank.com/certificates/c8787059177e' },
    { id: 7, title: 'C# (Basic)', link: 'https://www.hackerrank.com/certificates/023b2a4097a6' },
    { id: 8, title: 'Go (Basic)', link: 'https://www.hackerrank.com/certificates/97d51521bbb3' },
    { id: 9, title: 'Java (Basic)', link: 'https://www.hackerrank.com/certificates/8e28e9f11e7a' },
    { id: 10, title: 'Python (Basic)', link: 'https://www.hackerrank.com/certificates/743076126424' },
];

import { IoLocationOutline } from "react-icons/io5";

export default function Home() {

    return (
        <div className="flex flex-col items-center h-full w-full">

            <div className="bg-slate-700 p-2" style={{ width: '800px', height: '350px', borderWidth: '2.5px', borderColor: '#3C4758', opacity: 0.8 }}>
                <span className="text-white">Hey there 👋 🤓! I am </span>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-1 py-3" >
                        <div className='flex-1 flex-col gap-0 pl-5 '>
                            <div className="flex justify-start">
                                <span className="text-white text-6xl font-bold reduce-space">&lt;</span>
                                <span className="text-sky-400 text-6xl font-normal reduce-space">Alfredo</span>
                            </div>
                            <div className="flex items-center justify-end">
                                <span className="text-sky-400 text-6xl font-normal reduce-space">Martins</span>
                                <span className="text-white text-6xl font-bold reduce-space">/&gt;</span>
                            </div>
                            <span className="flex justify-center text-white  font-bold ">Software Engineer | Instructor | Problem Solver</span>

                            <div className="py-8">
                                <div className='flex flex-row gap-2'>
                                    <div>
                                        <div className='flex flex-col justify-center items-center pl-5'>
                                            <span className="text-sky-400 text-sm font-bold reduce-space">
                                                &lt; <span className="text-white text-sm font-bold reduce-space">Nationality</span> /&gt;
                                            </span>
                                            <div className="flex flex-col items-center">
                                                <Image
                                                    src={Angola}
                                                    alt="Angola"
                                                    width={45}
                                                    style={{ objectFit: 'contain', opacity: 0.7 }}
                                                />
                                                <span className="text-white text-sm">Angola</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex flex-col justify-center items-center pl-5'>
                                            <span className="text-sky-400 text-sm font-bold reduce-space">
                                                &lt; <span className="text-white text-sm font-bold reduce-space">Languages</span> /&gt;
                                            </span>
                                            <div className="flex flex-row justify-center items-center gap-3">
                                                <div className="flex flex-col items-center">
                                                    <Image
                                                        src={England}
                                                        alt="Angola"
                                                        width={45}
                                                        style={{ objectFit: 'contain', opacity: 0.7 }}
                                                    />
                                                    <span className="text-white text-sm">English</span>
                                                </div>

                                                <div className="flex flex-col items-center">
                                                    <Image
                                                        src={Portugal}
                                                        alt="Angola"
                                                        width={45}
                                                        style={{ objectFit: 'contain', opacity: 0.7 }}
                                                    />
                                                    <span className="text-white text-sm">Portuguese</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex flex-col justify-center items-center pl-5'>
                                            <span className="text-sky-400 text-sm font-bold reduce-space">
                                                &lt; <span className="text-white text-sm font-bold reduce-space">Current Address</span> /&gt;
                                            </span>
                                            <div className="flex flex-1 flex-row justify-center items-center h-full gap-1 pt-2">
                                                <IoLocationOutline size={15} style={{ color: 'white' }} />
                                                <span className="text-white text-sm h-full">Budapest, Hungary</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-2 bg-red-0" style={{ width: '220px' }}>
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <Image
                                    src={ProfilePhoto}
                                    alt="Picture of the author"
                                    width={210}
                                    style={{ objectFit: 'contain', opacity: 0.7 }}
                                />
                            </div>
                            <div>
                                <span className="text-white ">Alfredo Martins</span>
                            </div>
                            <div className="flex flex-row" >
                                <div className='bg-sky-700' style={{ width: '8px' }} />
                                <div className="items-center justify-center bg-sky-800 p-1">
                                    <p className="text-white text-xs leading-tight justify whitespace-normal">Tentar não significa conseguir, mas certamente quem conseguiu tentou.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">

                <div className="flex flex-col py-5 items-center gap-1">
                    <h1 className="text-sky-400 text-4xl font-semibold reduce-space">TechStack
                        <span className="text-white text-4xl font-bold reduce-space"> ( )</span>
                    </h1>

                    <div className="bg-slate-700 p-10" style={{ width: '1100px', height: '200px', borderWidth: '2.5px', borderColor: '#3C4758', borderRadius: '15px', opacity: 0.8 }}>
                        <div style={{ maxHeight: '300px', overflowX: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="overflow-x-scroll">
                            <ul className="flex flex-row items-center gap-5 overflow-x-scroll no-scrollbar" style={{ maxHeight: '300px', overflowX: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                {data.map(item => (
                                    <li key={item.id} className="flex flex-col items-center justify-center" style={{ height: '130px' }}>
                                        <div className="flex items-center justify-center p-1" style={{ height: '100px', width: '100px', backgroundColor: '#fcfcfc', borderRadius: '5px' }}>
                                            <Image
                                                src={item.technology}
                                                alt={item.technologyName}
                                                width={50}
                                                height={50}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        <div className="text-center mt-auto">
                                            <span className="text-white text-sm">{item.technologyName}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>

                <hr className="h-20.5 border-1 bg-red-500" />

                {/* EDUCATION */}

                <div className="flex flex-col py-5 items-center gap-1">
                    <h1 className="text-sky-400 text-4xl font-semibold reduce-space">Education
                        <span className="text-white text-4xl font-bold reduce-space"> ( )</span>
                    </h1>

                    <div className="flex flex-col items-center justify-center" style={{ height: '200px' }}>
                        <Image
                            src={ELTE}
                            alt="University logo"
                            width={200}
                            height={200}
                            style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col text-center mt-0">
                            <span className="text-white text-sm">Eötvös Loránd University</span>
                            <span className="text-white text-sm" style={{ color: '#84baa2' }}>Computer Science | 2024</span>
                        </div>
                    </div>

                </div>


                <hr className="h-20.5 border-1 bg-red-500" />

                {/* PROJECTS */}

                <div className="flex flex-col py-5 items-center gap-1">
                    <h1 className="text-sky-400 text-4xl font-semibold reduce-space">Projects
                        <span className="text-white text-4xl font-bold reduce-space"> ( )</span>
                    </h1>

                    <div className="bg-slate-700 p-10" style={{ width: '1200px', height: '500px', borderWidth: '2.5px', borderColor: '#3C4758', borderRadius: '15px', opacity: 0.8 }}>
                        <div style={{ maxHeight: '500px', overflowY: 'hidden', overflowX: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="overflow-x-scroll">
                            <ul className="flex flex-row items-center gap-5 overflow-x-scroll no-scrollbar" style={{ maxHeight: '450px', overflowX: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', overflowY: 'hidden' }}>
                                {project.map(item => (
                                    <li key={item.id} className="flex flex-col items-center justify-center" style={{ height: '410px' }}>
                                        <div className="flex items-center justify-center p-0.5" style={{ height: '410px', width: '410px', backgroundColor: '#fcfcfc', borderRadius: '5px' }}>

                                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                                <Image
                                                    src={item.projectImage}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    style={{ opacity: 0.9, zIndex: 0, borderRadius: '5px' }}
                                                    alt="Background"
                                                />

                                                <div style={{ position: 'absolute', bottom: 25, left: 10, width: 20, height: 20 }}>
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                        <div className="relative w-10 h-10 overflow-hidden rounded-full">
                                                            <Image
                                                                src={GitHub}
                                                                alt="Git logo"
                                                                layout="fill"
                                                                objectFit="contain"
                                                                style={{ opacity: 0.6 }}
                                                            />
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="text-center mt-auto">
                                            <span className="text-white text-sm">{item.title}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>



                <hr className="h-20.5 border-1 bg-red-500" />

                {/* CERTIFICATION */}

                <div className="flex flex-col py-5 items-center gap-1">
                    <h1 className="text-sky-400 text-4xl font-semibold reduce-space">Certifications
                        <span className="text-white text-4xl font-bold reduce-space"> ( )</span>
                    </h1>

                    <div className="bg-slate-700 p-10" style={{ width: '1200px', height: '225px', borderWidth: '2.5px', borderColor: '#3C4758', borderRadius: '15px', opacity: 0.8 }}>
                        <div style={{ maxHeight: '180px', overflowY: 'hidden', overflowX: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="overflow-x-scroll">
                            <ul className="flex flex-row items-center gap-5 overflow-x-scroll no-scrollbar" style={{ maxHeight: '180px', overflowX: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', overflowY: 'hidden' }}>
                                {certificates.map(item => (
                                    <li key={item.id} className="flex flex-col items-center justify-center" style={{ height: 'auto' }}>
                                        <div className="flex flex-col p-3.5 justify-between" style={{ height: '120px', width: '210px', backgroundColor: '#fcfcfc', borderRadius: '10px' }}>
                                            <span className="font-semibold text-md ">{item.title}</span>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <div className="flex flex-row items-center gap-2">
                                                    <Image
                                                        src={Certificate}
                                                        objectFit="contain"
                                                        height={50}
                                                        style={{ opacity: 0.9, zIndex: 0, borderRadius: '5px' }}
                                                        alt="Background"
                                                    />
                                                    <span className="font-semibold text-xs text-emerald-700">View certificate</span>
                                                </div>
                                            </a>

                                        </div>
                                        <div className="text-center mt-auto">
                                            <span className="text-white text-sm">{item.title}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                <hr className="h-20.5 border-1 bg-red-500" />

                {/* EXPERIENCE */}

                <div className="flex flex-col py-5 items-center gap-1">
                    <h1 className="text-sky-400 text-4xl font-semibold reduce-space">Experience
                        <span className="text-white text-4xl font-bold reduce-space"> ( )</span>
                    </h1>


                    <div className="p-5" style={{ width: '1200px', height: '840px', opacity: 0.8 }}>
                        <div style={{ maxHeight: '825px', overflowX: 'hidden', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="overflow-y-scroll">
                            <ul className="flex flex-col items-center gap-5 overflow-y-scroll no-scrollbar relative" style={{ maxHeight: '825px', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', overflowX: 'hidden' }}>
                                {certificates.splice(0, 1).map(item => (
                                    <li key={item.id} className={`justify-${item.id % 2 === 0 ? 'start' : 'end'} flex`} style={{ height: 'auto' }}>
                                        <div className="flex flex-col reduce-space" style={{ width: '50%' }}>
                                            {item.id % 2 === 1 ? (
                                                <div className="flex flex-row reduce-space justify-start">
                                                    <Image
                                                        src={TimelineRight}
                                                        objectFit="contain"
                                                        height={30}
                                                        style={{ marginLeft: -10, opacity: 0.9, zIndex: 0 }}
                                                        alt="Background"
                                                    />
                                                    <div className="flex absolute gap-16 p-1.5 pl-3">
                                                        <span className="font-normal text-sm text-white">July, 2023</span>
                                                        <span className="font-normal text-sm text-white">Now</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex flex-row reduce-space justify-end">
                                                    <Image
                                                        src={TimelineLeft}
                                                        objectFit="contain"
                                                        height={30}
                                                        style={{ marginRight: -4, opacity: 0.9, zIndex: 0 }}
                                                        alt="Background"
                                                    />
                                                    <div className="flex absolute gap-16 p-1.5 pr-10">
                                                        <span className="font-normal text-sm text-white">Aug., 2023</span>
                                                        <span className="font-normal text-sm text-white">2024</span>
                                                    </div>
                                                </div>
                                            )}

                                            <h1 className="font-sans text-md" style={{ color: '#A6DFD0' }}>Platform Engineer Trainee</h1>
                                            <h1 className="font-sans text-md" style={{ color: '#8995AA' }}>Responsabilities</h1>

                                            <div className="flex flex-row gap-0.5" >
                                                <div className='bg-sky-700 ml-4' style={{ width: '4px' }} />
                                                <div className="flex flex-col bg-sky-800 p-2 gap-2">
                                                <p className="text-white text-sm leading-tight justify whitespace-normal">Member of the Quality Assurance (QA) team of the Cloud Band Application RD, responsible for running manual tests and implementing automated tests to ensure that the product fulfills the customer requirements.</p>
                                                <p className="text-white text-sm leading-tight justify whitespace-normal">Automation of existing tests using software testing tools - test plan automation, features validations, manual testing GUI feature.</p>
                                                <p className="text-white text-sm leading-tight justify whitespace-normal">Participated in daily meetings.</p>
                                                <p className="text-white text-sm leading-tight justify whitespace-normal">Built domain knowledge in Linux, scripting (JAVA and JavaScript), testing (Postman), cloud and computer networking.</p>
                                                </div>
                                            </div>

                                            <h3 className="font-sans text-md" style={{ color: '#E5E5E5' }}>Java Programming Language, time management ...</h3>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}