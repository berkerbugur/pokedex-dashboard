import {PokeBall} from "@/app/components/pokeball/PokeBall";

export const StickyHeader = () => {
    return (
        <nav
            className={'mb-auto fixed top-0 w-full flex justify-center items-center bg-red-600 py-2 px-5 rounded-b-xl text-white z-10 drop-shadow-lg'}>
            <h5 className={'text-2xl sm:text-5xl ml-auto sm:mr-5 mr-2'}>PokeDex</h5>
            <PokeBall/>
            <h5 className={'text-2xl sm:text-5xl mr-auto sm:ml-5 ml-2'}>Home</h5>
        </nav>
    );
};