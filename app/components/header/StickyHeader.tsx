import {PokeBall} from "@/app/components/pokeball/PokeBall";

export const StickyHeader = () => {
    return (
        <nav
            className={'flex-center sticky-header-container'}>
            <h5 className={'sticky-header-item ml-auto sm:mr-5 mr-2'}>PokeDex</h5>
            <PokeBall/>
            <h5 className={'sticky-header-item mr-auto sm:ml-5 ml-2'}>Home</h5>
        </nav>
    );
};