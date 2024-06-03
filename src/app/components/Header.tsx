import Arrow from '@/app/assets/arrow.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IoCloudDownloadOutline, IoDownloadOutline } from 'react-icons/io5';
import GlowingButton from './GlowingButton';
import Link from 'next/link';

export default function Header() {
    const CodeTyper = "</CodeTyper>";
    return (
        <div className="flex flex-row justify-between w-full">
            <div className='flex flex-row gap-5 justify-center items-center pl-5'>
                <span className="text-sky-400 text-2xl font-bold reduce-space">&lt;</span>
                <span className="text-white text-2xl font-bold reduce-space">CodeTyper</span>
                <span className="text-sky-400 text-2xl font-bold reduce-space">/&gt;</span>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center pr-2'>
                <div className="relative">
                    <Image
                        src={Arrow}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <GlowingButton />
            </div>
        </div>
    );
}