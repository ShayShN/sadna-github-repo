import React, { useState } from 'react'

export default function GridLayout() {
    const [ceels, setCeels] = useState(Array.from({ length: 100 }))
    const [secretIndex, setSecretIndex] = useState(Math.floor(Math.random() * 100))
    const [clicks, setClick] = useState(0)
    const [found, setFound] = useState(false)
    const [clicked, setClicked] = useState([])

    console.log(secretIndex);


    function handleClick(index) {
        console.log(
            index
        );

        if (clicked.includes(index)) return

        setClick(prev => prev + 1)
        setClicked(prev => [...prev, index])

        if (index === secretIndex) {
            setFound(true)
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
            <div className='flex justify-around h-30'>
                <div className='flex flex-col text-white border-2 shadow'>
                    <p className='border-b-2 p-4'>💣 Bomb Reamining</p>

                </div>
                <div className='flex flex-col text-white border-2 shadow'>
                    <p className='border-b-2 p-4'>⏱️ Time Remaining</p>

                </div>
                <div className='flex flex-col text-white border-2 shadow'>
                    <p className='border-b-2 p-4'>🎬 Board Size</p>

                </div>
            </div>

            <div className='grid grid-cols-10  p-4  max-w-3xl mx-auto   '>
                {ceels.map((_, index) => (

                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`relative text-white w-full aspect-square border-2 border-white bg-[#2d3d57] hover:bg-gray-500 cursor-pointer`}


                    >

                        {!found && clicked.includes(index) && index !== secretIndex && (
                            <div className="absolute inset-0 flex items-center justify-center text-6xl bg-[#91969c]">
                                ❌
                            </div>
                        )}

                        {found && index === secretIndex && (
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                💣
                            </div>
                        )}
                    </div>

                ))}
            </div>
            <h2 className='text-white font-bold text-4xl'>Clicks: {clicks}</h2>
            <h3 className='text-yellow-500 font-bold text-4xl'>{found ? "weell done!" : "Keep Searching!"}</h3>
        </section>
    )
}
























