import React from 'react'
import { useState } from 'react'
import Piano from "./Piano";

const NoteSelection = () => {

  // false is chords, true is scales
  const [mode, setMode] = useState(false);
  // when selececting a new note
  const [note, setNote] = useState("G");
  // when selecting a new chord
  const [chord, setChord] = useState("Minor")
  // when selecting a new scale
  const [scale, setScale] = useState("Minor")


  // handles onClick to change from chords to scales
  const handleModeChange = () => {
    setMode(!mode);
  }
  // handles when a new note is seleceted
  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  // handles when a new Chord or Scale is seleceted
  const handleChordScaleChange = (newScale, newChord) => {
    setChord(newChord);
    setScale(newScale);
  }

  return (
    <div data-theme="corporate" className={mode ? 'w-full h-full bg-[#343a40] drop-shadow-xl ease-in-out' : 'w-full h-full bg-neutral drop-shadow-xl ease-in-out'}>
      <label className="swap swap-rotate w-full text-center text-[4rem] text-white">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />
        {/* scales */}
        <p onClick={handleModeChange} className='swap-on ease-in-out'>Scales</p>
        {/* chords */}
        <p onClick={handleModeChange} className='swap-off ease-in-out'>Chords</p>
      </label>

      {/* Notes buttons */}
      <div className='grid grid-cols-4 grid-rows-3 gap-8 place-items-center p-10'>
        <button onClick={() => { handleNoteChange("C") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>C</button>
        <button onClick={() => { handleNoteChange("C_Db") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>C#/Db</button>
        <button onClick={() => { handleNoteChange("D") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>D</button>
        <button onClick={() => { handleNoteChange("D_Eb") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>D#/Eb</button>
        <button onClick={() => { handleNoteChange("E") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>E</button>
        <button onClick={() => { handleNoteChange("F") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>F</button>
        <button onClick={() => { handleNoteChange("F_Gb") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>F#/Gb</button>
        <button onClick={() => { handleNoteChange("G") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>G</button>
        <button onClick={() => { handleNoteChange("G_Ab") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>G#/Ab</button>
        <button onClick={() => { handleNoteChange("A") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>A</button>
        <button onClick={() => { handleNoteChange("A_Bb") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>A#/Bb</button>
        <button onClick={() => { handleNoteChange("B") }} className={mode ? "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
          : "w-[3rem] h-[3rem] flex items-center justify-center p-8 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>B</button>
      </div>

      {/* chords & scales display */}
      <div className='w-full h-full gap-8 p-10 flex flex-col items-center justify-center'>
        {/* title */}
        {mode ? <h2 className='text-[2.5rem]'>Select a Scale</h2> : <h2 className='text-[2.5rem]'>Select a Chord</h2>}
        {/* grid for chords & scales */}
        <div className='w-full h-[20rem] overflow-y-auto hide-scrollbar grid grid-col-1 grid-flow-row md:grid-col-3 md:grid-rows-3 md:grid-flow-col place-items-center gap-8'>
          <button onClick={() => handleChordScaleChange("MajorScale", "Major")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Major" : "Major"}</button>
          <button onClick={() => handleChordScaleChange("MinorNatural", "Minor")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Minor Natural" : "Minor"}</button>
          <button onClick={() => handleChordScaleChange("MinorMelodic", "Seventh")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Minor Melodic" : "Seventh"}</button>
          <button onClick={() => handleChordScaleChange("MajorHarmonic", "Major7")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Major Harmonic" : "Major 7"}</button>
          <button onClick={() => handleChordScaleChange("MinorHarmonic", "Minor7")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Minor Harmonic" : "Minor 7"}</button>
          <button onClick={() => handleChordScaleChange("MajorPentatonic", "Augmented")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Major Pentatonic" : "Augmented"}</button>
          <button onClick={() => handleChordScaleChange("MinorPentatonic", "Diminished")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Minor Pentatonic" : "Diminished"}</button>
          <button onClick={() => handleChordScaleChange("MajorBlues", "Sustain4")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Major Blues" : "Sustain 4"}</button>
          <button onClick={() => handleChordScaleChange("MinorBlues", "Sustain2")} className={mode ? "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-white text-[#333] font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-[#000000] hover:text-white active:scale-[.90]"
            : "w-[11rem] h-[2rem] flex items-center justify-center p-6 rounded-md bg-primary text-white font-semibold cursor-pointer transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-[.90]"}>{mode ? "Minor Blues" : "Sustain 2"}</button>
        </div>
        <div>
          <p className='md:text-xl lg:text-3xl text-white tracking-wide'>{`Selected Note: ${note}`}</p>
          <p className='md:text-xl lg:text-3xl text-white tracking-wide'>{mode ? `Selected Scale: ${scale}` : `Selected Chord: ${chord}`}</p>  
        </div>
      </div>

      <Piano mode={mode} selectedNote={note} selectedChord={chord} selectedScale={scale} />
    </div>
  )
}

export default NoteSelection