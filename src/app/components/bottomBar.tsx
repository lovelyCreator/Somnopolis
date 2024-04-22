'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold " href="./">Somnopolis</a>
            </div>
            <div className="flex flex-col ml-4">
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

export default function BottomBar() {
    
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="w-full py-[50px] px-[20px] bg-[#F6F5F1] border-b border-grey-300">
                <div className="block md:flex justify-around items-start ">
                    <div className="w-full md:w-1/4 flex items-start pt-[20px] pl-[10px]">
                        <a className="text-3xl font-semibold text-pink-500 text-left" href="/">
                            <Image src='/img/logo_mark_black.png' alt="Logo" width={200} height={50}/>
                        </a>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center flex-col pl-[10px]">
                        <p className="text-[18pt] text-[#1A1D20] font-bold w-full text-left mt-[20px]">À propos de nous</p>
                        <p className="text-[16px] text-[#69747F] w-full mt-[20px] text-left">Bonjour, bienvenue à Sleepopolis ! Fondé en 2014, ce site a pour objectif de vous proposer les informations les plus complètes sur l'industrie du sommeil sur le Web. Vous trouverez de tout, des avis sur les matelas aux conseils sur le sommeil. Nous voulons vous aider à passer la meilleure nuit de sommeil de votre vie !</p>
                    </div>
                    <div className="w-full md:w-1/4 flex items-start flex-col">
                        <p className="text-[18pt] text-[#1A1D20] font-bold w-full text-left mt-[20px] pl-4 mb-[10px]">Classements</p>
                        <a className="text-[16px] font-semibold text-[#69747F]  pl-4 text-center pt-2" href="/bestMattress">Meilleur Matelas</a>
                        <a className="text-[16px] font-semibold text-[#69747F]  pl-4 text-center pt-5" href="/bestCheapMattress">Meilleur Matelas Pas Cher</a>
                        <a className="text-[16px] font-semibold text-[#69747F]  pl-4 text-center pt-5" href="/reviews">Commentaires</a>
                    </div>
                </div>
                <div className="w-full md:h-[200px] pt-[50px] rounded-tl-[120px] flex flex-col justify-evenly items-center ">
                    <p className="text-[20px] md:text-[30px] text-[#1A1D20] font-bold w-full text-center">Abonnez-vous aujourd'hui !</p>
                    <p className="md:text-[16pt] text-[#69747F] w-full text-center pb-3">Recevez les dernières offres, réductions, avis et cadeaux !</p>
                    <div className="w-full flex justify-center items-center">
                        <input type="text" className="text-[12px] md:text-[16px] border border-gray-300 rounded-tl-md rounded-bl-md px-3 py-3 md:py-2 focus:outline-none focus:border-blue-500" placeholder='Email Address'></input>
                        <button className="bg-[#1A1d20] hover:bg-[#323333] text-white text-[12px] md:text-[16px] font-bold py-3 md:py-2 border-[1px] border-[#121683] w-[130px] rounded-tr-md rounded-br-md">
                        Visit Site
                        </button>
                        {/* <input
                            type="submit"
                            value="Visite"
                            className="bg-[#1A1D20] hover:[#87886A] text-[#69747F] font-bold py-2 px-4 rounded"
                        /> */}
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#F6F5F1] py-[20px]'>
                <p className='text-center text-wrap'>
                    Copyright © 2024 Sleepopolis Tous droits réservés.
                </p>
            </div>
        </>
    )
}
