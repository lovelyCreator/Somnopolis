'use client';

import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import styles from './CustomText.module.css';

const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className=" ml-1 text-left items-start w-full flex" href="/">
                    <Image src='/img/logo_mark_black.png' 
                        alt="Logo" 
                        width={100} 
                        height={50}
                        className="w-[200px]"
                    />
                </a>
            </div>
            <div className={`${styles.rubikFont} flex flex-col ml-4`}>
                <a className="text-xl font-medium my-4" href="/bestMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Meilleur Matelas
                </a>
                <a className="text-xl font-normal my-4" href="/bestCheapMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Meilleur Matelas Pas Cher
                </a>
                <a className="text-xl font-normal my-4" href="/reviews" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Commentaires
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
        <nav className={`flex filter drop-shadow-md bg-[#F1F1F1] px-4 py-4 h-20 items-center  justify-between ${open? 'relative': ''}`}>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="flex items-center text-[#69747F]">
                <a className="text-3xl font-semibold text-pink-500 ml-1 lg:ml-24 text-center" href="/">
                    <img src='/img/logo_mark_black.png' alt="Logo" className='w-[100px] lg:w-[200px]'/>
                </a>
            </div>
            <div className="flex items-center text-[#69747F]">

                <div className={`z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden ${open ? "absolute right-[-45vw]" : ""}`} onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className={`${styles.rubikFont} hidden md:flex`}>
                    <NavLink to="/bestMattress">
                        <span className="hover:text-[#1A1D20]">Meilleur Matelas</span>
                    </NavLink>
                    <NavLink to="/bestCheapMattress">
                        <span className="hover:text-[#1A1D20]">Meilleur Matelas Pas Cher</span>
                    </NavLink>
                    <NavLink to ="/reviews">
                        <span className="hover:text-[#1A1D20]">Commentaires</span>
                    </NavLink>
                </div>
            </div>
            <div className={`${styles.rubikFont} md:flex rounded-[50px] border border-[#69747F] py-2 px-4 text-[#69747F] text-[12px] md:text-[16px] hover:text-[#1A1D20] hover:border-[#1A1D20]`}>
                <NavLink to="/bestMattress">
                    En savoir plus
                </NavLink>
            </div>
        </nav>
    )
}