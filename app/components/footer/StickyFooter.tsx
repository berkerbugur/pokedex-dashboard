import Image from "next/image";
import {githubUrl, linkedInUrl} from "@/app/constants/constants";
import {GitHub, LinkedIn} from "@/app/constants/images";

export const StickyFooter = () => {
    return (
        <>
            <footer className='flex items-center fixed bottom-0 w-full px-10 py-3 bg-red-600 rounded-t-xl text-white text-center drop-shadow-lg'>
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