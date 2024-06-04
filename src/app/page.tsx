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
import Home from "./screens/home/page";

export default function Main() {

    return (
        <Home/>
    );
}