import React from 'react'

function Loading({theme}) {
  return (
    <div 
        className={`
            ${theme === "light" ? "bg-slate-200" : "bg-gray-700"}
            pb-[100vw] my-auto mx-auto
        `}>
        <div className="flex items-center justify-center align-middle">
            <div
                className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                    Loading...
                </span>
            </div>
        </div>
    </div>
  )
}

export default Loading