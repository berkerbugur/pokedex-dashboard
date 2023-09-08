import React from "react";

import './globals.css'
import type {Metadata} from 'next'
import {Fira_Code, Fira_Mono} from 'next/font/google'
import {StickyHeader} from "@/app/components/header/StickyHeader";
import {StickyFooter} from "@/app/components/footer/StickyFooter";

const fira = Fira_Mono({weight: '500', subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Pokedex DashBoard',
    description: 'Gotta Catch\'em All ',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${fira.className}, bg-green-500 bg-opacity-90`}>
        <StickyHeader/>
        {children}
        <StickyFooter/>
        </body>
        </html>
    )
}
