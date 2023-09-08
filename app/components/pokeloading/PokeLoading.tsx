import Image from "next/image";
import {PokeLoad} from "@/app/constants/images";

export const PokeLoading = () => {
    return (
        <>
            <Image src={PokeLoad} alt="PokeLoading" width='50' className='animate-spin'/>
        </>
    );
};