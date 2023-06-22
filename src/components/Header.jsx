import React from 'react'
import { IoMusicalNote, IoMusicalNotes, } from "react-icons/io5";

const Header = () => {
  return (
    <header data-theme="corporate" className='w-full h-full relative'>
      {/* Nav */}
        <nav className='w-full bg-neatral flex justify-center drop-shadow-lg'>
            <h1 className='text-white font-bold tracking-wider text-[2.7rem]'>Master Keys</h1>
        </nav>
        {/* Hero Text */}
        <div className='w-full h-full relative p-11 flex flex-col gap-10 items-center justify-center bg-white text-base-100'>
          <h2 className='text-2xl font-semibold text-center tracking-wider w-[10rem]'>Welcome to Master Keys</h2>
          <p className='text-xl text-center tracking-wide leading-relaxed'>Unlock the world of music with Master Keys, your go-to destination for all things piano. Explore piano notes, chords, and scales.</p>
          <IoMusicalNote className='absolute w-[2rem] h-[3rem] top-14 left-10 note-floating-left'/>
          <IoMusicalNotes className='absolute w-[2rem] h-[3rem] top-14 right-10 note-floating-right'/>
        </div>
    </header>
  )
}

export default Header