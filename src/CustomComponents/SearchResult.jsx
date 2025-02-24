import LandCard from "./Card/LandCard";
import SearchFilter from "./SearchFilter";
import { FaFilter } from "react-icons/fa";

const SearchResult = () => {

    return (
        <>  

            <div className=" h-screen w-screen  items-center bg-green-100 flex flex-col rounded-2xl">
                
                <div className="h-full w-[80%] flex flex-row rounded-2xl bg-white">
                    <div className="search h-full w-[25%] border-r-1 border-gray-300 ">
                        <span className="montserrat-font h-[10%] bg-gray-100 flex items-center justify-start pl-12 text-xl space-x-4"><FaFilter/> <span>Filter</span> </span>
                        <SearchFilter/>
                    </div>
                    <div className="h-full w-[75%] flex flex-col">
                        <span className="montserrat-font h-[10%] bg-gray-100 flex items-center justify-start pl-12 text-xl">Showing results for </span>
                        <div className="h-[90%] overflow-scroll result  bg-white pt-10 flex flex-col space-y-10 items-center">
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                            <div  className="min-h-[200px] w-full flex items-center justify-center"><LandCard /></div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )

}


export default SearchResult;