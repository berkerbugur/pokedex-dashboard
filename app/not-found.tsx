import Image from "next/image";
import {Surprised} from "@/app/constants/images";

const NotFound = () => {
    return (
        <main className="m-auto mt-64 text-center text-white bg-blue-600">
        <div className='flex justify-center'>
            <p className='text-[60px] sm:text-[120px] my-auto'>404</p>
            <Image src={Surprised} alt='Surprised PsyDuck' className='max-w-[100px] max-h-[100px] my-auto'/>
            <p className='text-[25px] sm:text-[50px] my-auto'>Not Found</p>
        </div>
        </main>
    )
}

export default NotFound