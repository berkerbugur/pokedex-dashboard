import Image from "next/image";
import {githubUrl, linkedInUrl} from "@/app/constant/url";
import {GitHub, LinkedIn} from "@/app/constant/image";

export const StickyFooter = () => {
    return (
        <>
            <footer
                className='sticky-footer-container'>
                <h1 className='text-sm'>PokeDex By Berker Bugur @ 2023</h1>
                <div className='flex ml-auto'>
                    <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
                        <Image src={GitHub} alt="GitHub Link" width='35'/>
                    </a>
                    <a className="ml-5" target="_blank" rel="noopener noreferrer" href={linkedInUrl}>
                        <Image src={LinkedIn} alt="LinkedIn Link" width='35'/>
                    </a>
                </div>
            </footer>
        </>
    );
};