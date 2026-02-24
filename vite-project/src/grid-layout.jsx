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
        <section className='bg-blue-800 p-6 text-center'>

            <h1 className='text-white font-bold text-4xl'>Welcome to the game! Find the color:🟥</h1>

            <div className='grid grid-cols-10  p-4  max-w-3xl mx-auto   '>
                {ceels.map((_, index) => (

                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`relative text-white w-full aspect-square border-2 border-white bg-black hover:bg-gray-500 cursor-pointer`}


                    >

                        {!found && clicked.includes(index) && index !== secretIndex && (
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                ❌
                            </div>
                        )}

                        {found && index === secretIndex && (
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                <img src="unnamed.png" alt="YISHAI OSSI" />
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
























