

const BuyLand = () => {
    return(
        <>
            <div className="montserrat-font  h-full w-full flex flex-col p-10 space-y-10">

                <div className="flex w-full  items-start justify-between space-x-10 h-[10%] ">
                    <div className="flex items-center justify-between h-full w-[40%] ">
                        <label className=" ">Owner Name :</label>
                        <input className="  rounded-md border h-[40%] w-[60%] focus:outline-none p-5 text-md text-gray-700" placeholder="Enter Name"></input>
                    </div>  
                    <div className="flex items-center justify-between  h-full w-[40%]  ">
                        <label className=" ">Phone no :</label>
                        <input className="  rounded-md border h-[40%] w-[70%] focus:outline-none p-5 text-md text-gray-700" placeholder="Enter Phoen No"></input>
                    </div>  
                </div>
                <div className="flex w-full  items-start justify-between space-x-10 h-[10%] ">
                    <div className="flex items-center justify-between h-full w-[40%] ">
                        <label className=" ">Sq ft :</label>
                        <input className="  rounded-md border h-[40%] w-[60%] focus:outline-none p-5 text-md text-gray-700" placeholder="Enter Sq ft"></input>
                    </div>  
                    <div className="flex items-center justify-between  h-full w-[40%]  ">
                        <label className=" ">Location :</label>
                        <input className="  rounded-md border h-[40%] w-[70%] focus:outline-none p-5 text-md text-gray-700" placeholder="Enter Location"></input>
                    </div>  
                </div>
                <div className="flex w-full  items-start justify-between space-x-10 h-[10%] ">
                    <div className="flex items-center justify-between h-full w-[40%] ">
                        <label className=" ">Price :</label>
                        <input className="  rounded-md border h-[40%] w-[60%] focus:outline-none p-5 text-md text-gray-700" placeholder="Enter Location"></input>
                    </div>  
                    <div className="flex items-center justify-between  h-full w-[40%]  ">
                        <label className=" ">Image :</label>
                        <input className="  rounded-md border h-[40%] w-[70%] focus:outline-none p-5 text-md text-gray-700" placeholder="Enter Location"></input>
                    </div>  
                </div>
                <div className="flex items-start justify-between space-x-9  h-[10%]">
                    <label className=" ">Desciption : </label>
                    <textarea className="flex flex-grow focus:outline-none rounded-md focus-within:border-green-300 focus-within:border-3 w-[80%] border border-gray-300"/>
                </div>
                <div className="flex items-start justify-end space-x-9  h-[10%]">
                    <button className="hover:bg-green-700 hover:text-lg hover:text-white rounded-md border pl-10 pr-10 h-full w-[25%] "> Submit </button>
                </div>
            </div>   
        </>
    )
}

// desc || address || BHK || location || image || land area || carpet area

export default BuyLand;