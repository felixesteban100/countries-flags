import React, {useMemo} from 'react'
import ReactPaginate from 'react-paginate';

function Card({theme, currentCountries, selectCountry}) {

    return (
        <div 
            className={`
                ${theme === "light" ? "bg-slate-200 text-black" : "bg-gray-700 text-white"}
                grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center align-middle 
                p-5 sm:pl-[15vw] lg:pl-[10vw] md:pl-[10vw] xl:pl-[15vw] sm:pr-[15vw] lg:pr-[10vw] md:pr-[10vw] xl:pr-[15vw]
                ${currentCountries.length < 4 ? 'pb-[17.6vw]' : ''} 
            `}
        >
            {
                currentCountries.map((current, index) => {
                    return (
                        <div 
                            /*max-w-xs */
                            className={`
                                mt-4 mb-2 rounded-lg shadow-lg shadow-slate-900 h-full w-[100%]
                                ${theme === "light" ? "" : "bg-gray-900 text-white"} 
                                cursor-pointer
                            `}
                            key={index}  
                            onClick={() => selectCountry(current.name.official)}
                        >
                            <img 
                                className={`w-full h-48`} 
                                src={current.flags.png} 
                                alt="" 
                            />
                            <div 
                                className={`
                                    ${theme === "light" ? "" : "bg-gray-900 text-white"}
                                    px-6 py-4 
                                `}
                            >
                                <p 
                                    className={`
                                        mb-3 text-xl font-semibold tracking-tight 
                                        ${theme === "light" ? "bg-slate-200" : "bg-gray-900 text-white"}
                                    `}
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

function PaginatedItems({ currentPage, setCurrentPage, itemsPerPage, theme, countries, selectCountry}) {   
    
    const pageCount = useMemo(() => {
        return Math.ceil(countries.length / itemsPerPage); 
    }, [countries, itemsPerPage]); // add data as dependency

    const handlePageChange = ( selected ) => {
        setCurrentPage(selected);
    };

    const paginatedData = useMemo(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return countries.slice(startIndex, endIndex);
    }, [currentPage, countries,  itemsPerPage]); 
    

    return (
        <div 
            className={`
                ${theme === "light" ? "bg-slate-200 text-black" : "bg-gray-700 text-white"}
            `}
        >

        <Card 
            currentCountries={paginatedData} 
            theme={theme}
            selectCountry={selectCountry}
        />
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => handlePageChange(event.selected)}
            pageRangeDisplayed={(window.innerWidth < 1200 ? 1 : 3)}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className={`
                text-xl sm:text-2xl
                flex flex-nowrap gap-5 justify-center pb-10 xl:pb-14 lg:pb-10 md:pb-16 sm:pb-16 pt-5 xl:pt-12 sm:pt-10
            `}
            activeClassName={`${theme === "light" ? 'text-blue-800' : 'text-blue-400'}`}
            pageClassName={`border-1`}
            forcePage={currentPage}
            // initialPage={0}
            // pageRangeDisplayed={3}
        />
        {/* <ReactPaginate
            breakLabel="-"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className={`
                text-xl sm:text-2xl
                flex flex-nowrap gap-5 justify-center pb-10 xl:pb-20 lg:pb-10 md:pb-16 sm:pb-20 pt-5
            `}
            pageClassName={`border-1`}
            activeClassName={`${theme === "light" ? 'text-blue-800' : 'text-blue-400'}`}
            forcePage={itemOffset === 0 && 0}
        /> */}
      </div>
    );
}

export default PaginatedItems