
import React from 'react';
import { Button } from '@/components/ui/button';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import "./styles.css";

const GlowingButton = () => {
    // const link = "https://www.dropbox.com/scl/fi/arkw69ba00m82tcas4zjh/cv_resume_june_2024.pdf?rlkey=u0od12hczj3h1xmpmh0ku38ul&st=md0dkbfa&dl=0";
    const link = "https://www.dropbox.com/scl/fi/ai8n6jp1560mrlfngkpss/Alfredo-Martins-Curriculum-Vitae.pdf?rlkey=g2c931f4wfa0uyluz45ynseld&st=jo0aaxnd&dl=0";
    return (
        <Button variant="outline" className="button" >
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className='flex flex-row items-center justify-between gap-2'>
                    <IoCloudDownloadOutline size={25} style={{ color: 'white' }} />
                    <span className='text-white'>Resume</span>
                </div>
            </a>

        </Button>
    );
}

export default GlowingButton;
