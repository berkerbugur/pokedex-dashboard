import {PokeList} from "@/app/components/pokelist/PokeList";
import {StickyHeader} from "@/app/components/header/StickyHeader";
import React from "react";
import {StickyFooter} from "@/app/components/footer/StickyFooter";

export default function Home() {
  return (
    <main className='mt-24 mb-20 mx-10'>
            <PokeList/>
    </main>
  )
}
