import React from 'react'
import noteSounds from '../audio/Notes'
import { highlightChords } from './Chords'
import highlightScales from './Scales'


const Piano = (props) => {
  const selectedNote = props.selectedNote;
  const selectedChord = props.selectedChord;
  const selectedScale = props.selectedScale;
  const mode = props.mode;

  // Getting all the keys, will return a HTMLCollection
  const whiteKeysCollection = document.getElementsByClassName("key-white")
  const blackKeysCollection = document.getElementsByClassName("key-black")
  // turning HTMLCollection into an Array
  const whiteKeys = Array.from(whiteKeysCollection)
  const blackKeys = Array.from(blackKeysCollection)
  const keyList = []
  // adding keys to keylList
  whiteKeys.forEach((key) => { keyList.push(key) })
  blackKeys.forEach((key) => { keyList.push(key) })


  // plays single note sound
  const playSound = (note) => {
    const audio = new Audio(note);
    audio.play();
    // Pause audio after a short delay
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 2500); // Adjust the delay as needed
  }

  // // plays chord 
  // const playChord = (notes) => {
  //   // plays each note individually
  //   notes.forEach((note, index) => {
  //     setTimeout(() => {
  //       const audio = new Audio(note)
  //       audio.play()
  //     }, index * 500)
  //     // plays the chord after the notes
  //     // setTimeout(() => {
  //     //   notes.forEach((note) => {
  //     //     const audio = new Audio(note)
  //     //     audio.play()
  //     //   })
  //     // }, notes.length * 600 + 2000)
  //   })
  // }

  // highlights the notes for the chord or scale by adding "chord-note" class to each key 
  const highlightNotes = (note) => {
    // Removes class from the last selected
    keyList.forEach(key => key.classList.remove("chord-note"))
    // looping throgh the notes and if the note is equal to second classname add chord-note class
    note.forEach((n) => {
      keyList.forEach((key) => {
        // Highlighting the notes if the note macthes the note second className
        if (n === key.className.split(" ")[1]) {
          key.classList.add("chord-note")
        }
      })
    })
  }


  // Creating a chordList of all the keys in highlightChords
  const chordList = []
  chordList.push(Object.keys(highlightChords))
  // Destructuring the chords in highlightChords
  const { Major, Minor, Seventh, Major7, Minor7, Augmented,
    Diminished, Sustain4, Sustain2 } = highlightChords;
  // Creating a scaleList of all the keys in highlightScales
  const scaleList = []
  scaleList.push(Object.keys(highlightScales))
  // Destructuring the chords in highlightScales
  const { MajorScale, MinorNatural, MinorMelodic, MajorHarmonic,
    MinorHarmonic, MajorPentatonic, MinorPentatonic, MajorBlues, MinorBlues } = highlightScales

  // this is to get the first note out of the scale that is equal to the selectedNote
  const majorScale = MajorScale[selectedNote][0]
  const minorNaturalScale = MinorNatural[selectedNote][0]
  const minorMelodicScale = MinorMelodic[selectedNote][0]
  const majorHarmonicScale = MajorHarmonic[selectedNote][0]
  const minorHarmonicScale = MinorHarmonic[selectedNote][0]
  const majorPentatonicScale = MajorPentatonic[selectedNote][0]
  const minorPentatonicScale = MinorPentatonic[selectedNote][0]
  const majorBluesScale = MajorBlues[selectedNote][0]
  const minorBluesScale = MinorBlues[selectedNote][0]

  // this is to get the first note out of the chord that is equal to the selectedNote
  const majorNote = Major[selectedNote][0]
  const minorNote = Minor[selectedNote][0]
  const seventhNote = Seventh[selectedNote][0]
  const major7Note = Major7[selectedNote][0]
  const minor7Note = Minor7[selectedNote][0]
  const augmentedNote = Augmented[selectedNote][0]
  const diminishedNote = Diminished[selectedNote][0]
  const sustain4Note = Sustain4[selectedNote][0]
  const sustain2Note = Sustain2[selectedNote][0]


  // highlights the chord based on selected note and selected chord
  const noteChordSelection = () => {
    let cChord
    if (selectedNote === majorNote || selectedNote === minorNote || selectedNote === seventhNote || selectedNote === major7Note ||
      selectedNote === minor7Note || selectedNote === augmentedNote || selectedNote === diminishedNote || selectedNote === sustain4Note ||
      selectedNote === sustain2Note) {
      chordList.forEach(chord => {
        chord.forEach(i => {
          if (selectedNote === majorNote && selectedChord === i) {
            cChord = i;
          };
        })
      })
    }
    switch (cChord) {
      case "Major":
        highlightNotes(Major[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Major[selectedNote]))
        break
      case "Minor":
        highlightNotes(Minor[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Minor[selectedNote]))
        break
      case "Seventh":
        highlightNotes(Seventh[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Seventh[selectedNote]))
        break
      case "Major7":
        highlightNotes(Major7[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Major7[selectedNote]))
        break
      case "Minor7":
        highlightNotes(Minor7[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Minor7[selectedNote]))
        break
      case "Augmented":
        highlightNotes(Augmented[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Augmented[selectedNote]))
        break
      case "Diminished":
        highlightNotes(Diminished[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Diminished[selectedNote]))
        break
      case "Sustain4":
        highlightNotes(Sustain4[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Sustain4[selectedNote]))
        break
      case "Sustain2":
        highlightNotes(Sustain2[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Sustain2[selectedNote]))
        break
    }
  }

  const noteScaleSelection = () => {
    let cScale
    if (selectedNote === majorScale || selectedNote === minorNaturalScale || selectedNote === minorMelodicScale || selectedNote === majorHarmonicScale ||
      selectedNote === minorHarmonicScale || selectedNote === majorPentatonicScale || selectedNote === minorPentatonicScale || selectedNote === majorBluesScale ||
      selectedNote === minorBluesScale) {
      scaleList.forEach(scale => {
        scale.forEach(i => {
          if (selectedNote === majorScale && selectedScale === i) {
            cScale = i;
          };
        })
      })
    }
    switch (cScale) {
      case "MajorScale":
        highlightNotes(MajorScale[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Major[selectedNote]))
        break
      case "MinorNatural":
        highlightNotes(MinorNatural[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Minor[selectedNote]))
        break
      case "MinorMelodic":
        highlightNotes(MinorMelodic[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Seventh[selectedNote]))
        break
      case "MajorHarmonic":
        highlightNotes(MajorHarmonic[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Major7[selectedNote]))
        break
      case "MinorHarmonic":
        highlightNotes(MinorHarmonic[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Minor7[selectedNote]))
        break
      case "MajorPentatonic":
        highlightNotes(MajorPentatonic[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Augmented[selectedNote]))
        break
      case "MinorPentatonic":
        highlightNotes(MinorPentatonic[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Diminished[selectedNote]))
        break
      case "MajorBlues":
        highlightNotes(MajorBlues[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Sustain4[selectedNote]))
        break
      case "MinorBlues":
        highlightNotes(MinorBlues[selectedNote])
        // document.getElementsByClassName(`${selectedNote}`)[0].addEventListener("click", () => playChord(chords.Sustain2[selectedNote]))
        break
  }
}
  // Clears piano when you switch to scales mode
  if (mode === true) keyList.forEach(key => key.classList.remove("chord-note"))


  mode === false ? noteChordSelection() : noteScaleSelection()

  // Clears the keyboard
  const reset = () => keyList.forEach(key => key.classList.remove("chord-note"));

  return (
    <div data-theme='corporate' className='w-full h-full relative bg-neutral flex items-center justify-center'>
      <div className='piano flex items-start justify-center'>
        <div onClick={() => playSound(noteSounds.F)} className="key-white F">F</div>
        <div onClick={() => playSound(noteSounds.F_Gb)} className="key-black F_Gb"><span>F#</span><span>Gb</span></div>
        <div onClick={() => playSound(noteSounds.G)} className="key-white G">G</div>
        <div onClick={() => playSound(noteSounds.G_Ab)} className="key-black G_Ab"><span>G#</span><span>Ab</span></div>
        <div onClick={() => playSound(noteSounds.A)} className="key-white A">A</div>
        <div onClick={() => playSound(noteSounds.A_Bb)} className="key-black A_Bb"><span>A#</span><span>Bb</span></div>
        <div onClick={() => playSound(noteSounds.B)} className="key-white B">B</div>
        <div onClick={() => playSound(noteSounds.C)} className="key-white C">C</div>
        <div onClick={() => playSound(noteSounds.C_Db)} className="key-black C_Db"><span>C#</span><span>Db</span></div>
        <div onClick={() => playSound(noteSounds.D)} className="key-white D">D</div>
        <div onClick={() => playSound(noteSounds.D_Eb)} className="key-black D_Eb"><span>D#</span><span>Eb</span></div>
        <div onClick={() => playSound(noteSounds.E)} className="key-white E">E</div>
        <div onClick={() => playSound(noteSounds.F2)} className="key-white F2">F</div>
        <div onClick={() => playSound(noteSounds.F_Gb2)} className="key-black F_Gb2"><span>F#</span><span>Gb</span></div>
        <div onClick={() => playSound(noteSounds.G2)} className="key-white G2">G</div>
        <div onClick={() => playSound(noteSounds.G_Ab2)} className="key-black G_Ab2"><span>G#</span><span>Ab</span></div>
        <div onClick={() => playSound(noteSounds.A2)} className="key-white A2">A</div>
        <div onClick={() => playSound(noteSounds.A_Bb2)} className="key-black A_Bb2"><span>A#</span><span>Gb</span></div>
        <div onClick={() => playSound(noteSounds.B2)} className="key-white B2">B</div>
        <div onClick={() => playSound(noteSounds.C2)} className="key-white C2">C</div>
        <div onClick={() => playSound(noteSounds.C_Db2)} className="key-black C_Db2"><span>C#</span><span>Db</span></div>
        <div onClick={() => playSound(noteSounds.D2)} className="key-white D2">D</div>
        <div onClick={() => playSound(noteSounds.D_Eb2)} className="key-black D_Eb2"><span>D#</span><span>Eb</span></div>
        <div onClick={() => playSound(noteSounds.E2)} className="key-white E2">E</div>
      </div>
      <button onClick={reset} className='absolute text-white top-[-25px] text-2xl uppercase'>Reset</button>
    </div>
  )
}

export default Piano