import React from 'react'
// import '../App.css'

function Card(props) {
    //${props.theme === "light" ? "bg-slate-200 text-black" : "bg-gray-700 text-white"} 

    //https://ordinarycoders.com/blog/article/17-tailwindcss-cards

    //https://codepen.io/felixesteban100/pen/JjaLXOj?editors=1000

    //https://larainfo.com/blogs/create-a-simple-responsive-card-grid-with-tailwind-css-examples

    //how to make the content of the grid templete fill the width of each item inside with tailwind (CHATGPT)

    return (
        <div 
            className={`
                ${props.theme === "light" ? "bg-slate-200 text-black" : "bg-gray-700 text-white"}
                grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center align-middle 
                p-5 sm:pl-[15vw] lg:pl-[10vw] md:pl-[10vw] xl:pl-[15vw] sm:pr-[15vw] lg:pr-[10vw] md:pr-[10vw] xl:pr-[15vw]
                ${props.countries.length < 6 ? 'pb-[100vw]' : ''}
            `}
        >
            {
                props.countries.map((current, index) => {
                    return (
                        <div 
                            /*max-w-xs */
                            className={`
                                 mb-2 rounded-lg shadow-lg shadow-slate-900 h-full w-[100%]
                                ${props.theme === "light" ? "" : "bg-gray-900 text-white"} cursor-pointer`} 
                            key={index}  
                            onClick={() => props.selectCountry(current.name.official)}
                        >
                            <img 
                                className={`w-full h-48`} 
                                src={current.flags.png} 
                                alt="" 
                            />
                            <div 
                                className={`
                                    ${props.theme === "light" ? "" : "bg-gray-900 text-white"}
                                    px-6 py-4 
                                `}
                            >
                                <p 
                                    className={`mb-3 text-xl font-semibold tracking-tight ${props.theme === "light" ? "bg-slate-200" : "bg-gray-900 text-white"}`}
                                >
                                    {current.name.official}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card