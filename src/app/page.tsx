import Image from "next/image";
import ProfilePhoto from './assets/Image.png';
import Angola from './assets/Angola.png';
import England from './assets/England.png';
import Portugal from './assets/Portugal.png';
import Cpp from './assets/TechStack/Cpp.png';
import ReactImage from './assets/TechStack/React.png';
import ReactNative from './assets/TechStack/React_Native.png';
import Docker from './assets/TechStack/Docker.png';
import Figma from './assets/TechStack/Figma.png';
import Flask from './assets/TechStack/Flask.png';
import Git from './assets/TechStack/Git.png';
import Java from './assets/TechStack/Java.png';
import NodeJS from './assets/TechStack/NodeJS.png';
import Python from './assets/TechStack/Python.png';
import Typescript from './assets/TechStack/Typescript.png';

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
                                                    style={{ objectFit: 'contain' }}
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
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                    <span className="text-white text-sm">English</span>
                                                </div>

                                                <div className="flex flex-col items-center">
                                                    <Image
                                                        src={Portugal}
                                                        alt="Angola"
                                                        width={45}
                                                        style={{ objectFit: 'contain' }}
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
                                    style={{ objectFit: 'contain' }}
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

            <div className="flex flex-col py-5 items-center gap-1">
                <h1 className="text-sky-400 text-4xl font-semibold reduce-space">TechStack
                    <span className="text-white text-4xl font-bold reduce-space"> ( )</span>
                </h1>

                <div className="bg-slate-700 p-10" style={{ width: '1100px', height: '200px', borderWidth: '2.5px', borderColor: '#3C4758', borderRadius: '15px',  opacity: 0.8  }}>
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
        </div >
    );
}