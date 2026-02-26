import React, { useState } from 'react'
import GameHeader from './GameHeader'
export default function GridLayout() {
    const [ceels, setCeels] = useState(Array.from({ length: 100 }))
    const [secretIndexes] = useState(() => {
    const indexes = new Set()
    while (indexes.size < 5) {
        indexes.add(Math.floor(Math.random() * 100))
    }
    return Array.from(indexes)
})
    const [clicks, setClick] = useState(0)
    const [foundBombs, setFoundBombs] = useState([])
    const [clicked, setClicked] = useState([])
    const [gameOver, setGameOver] = useState(false)
    console.log(secretIndexes)

    function handleClick(index) {
    if (clicked.includes(index) || gameOver) return

    setClick(prev => prev + 1)
    setClicked(prev => [...prev, index])

    if (secretIndexes.includes(index)) {
        setFoundBombs(prev => {
            const updated = [...prev, index]

            if (updated.length === 5) {
                setGameOver(true)
            }

            return updated
        })
    }
}
    return (
        <section className='bg-[#182033]  text-center'>
            <header className='flex justify-between relative border-b-2  '>
                <p className='text-4xl'>📡</p>
                <h1 className='text-white text-3xl font-bold'>Bomb Detection Application</h1>
                <p className='text-green-400'>Simulation Active</p>
            </header>
            <h2 className='text-white border-t-2 border-b-2 mt-4 p-4'>Locate and neutralize all bombs before time runs out.</h2>
            <GameHeader gameOver={gameOver} foundBombs={foundBombs}></GameHeader>

            <div className='grid grid-cols-10  p-4  max-w-3xl mx-auto   '>
                {ceels.map((_, index) => (

                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`relative text-white w-full aspect-square border-2 border-white bg-[#2d3d57] hover:bg-gray-500 cursor-pointer`}


                    >

                        {clicked.includes(index) && !secretIndexes.includes(index) && (
                            <div className="absolute inset-0 flex items-center justify-center text-6xl bg-[#91969c]">
                                ❌
                            </div>
                        )}

                        {foundBombs.includes(index) &&  (
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                💣
                            </div>
                        )}
                    </div>

                ))}
            </div>
            <h2 className='text-white font-bold text-4xl'>Clicks: {clicks}</h2>
        <h3 className='text-yellow-500 font-bold text-4xl'>
    {foundBombs.length === 5 ? "Well done! All bombs neutralized!" : "Keep Searching!"}
</h3>
                <button className='bg-green-700 w-96 h-10 text-2xl text-amber-100 font-extrabold' onClick={()=> location.reload()}>reset game</button>
        </section>
    )
}
























