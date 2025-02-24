import { TbRulerMeasure } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa"

import { MdSell } from "react-icons/md";
// props required img : src || desciption || rate || sq ft ||

const LandCard = () => {

    return (
        <>
            <div className=" h-52 w-[90%] rounded-xl  flex p-2 space-x-4 shadow-2xl border border-gray-300">

                {/* IMG OF THE LAND */}
                <img className="w-[25%] rounded-xl ]" src="https://homezonline.in/wp-content/uploads/2022/07/Modern-double-storey-home.jpg" alt="House" />
               
                {/* MIDDLE DIV */}
                <div className="w-[50%] flex flex-col justify-evenly">
                    <h1 className="montserrat-font truncate  text-gray-500 text-md  text-justify">A residential house is available for rent.we can use commercial purposes slso. It covered area of 3800 sq-ft, it is a good location. contact for more details.</h1>
                    <div className="montserrat-font text-sm text-gray-700 bg-[#f5f5f5] rounded-md p-2 font-bold flex items-center justify-start space-x-2 "><FaUser size={15} /> <span>Owner : R T DEVA ABIJO</span></div>
                    <div className="montserrat-font text-sm text-gray-700 bg-[#f5f5f5] rounded-md p-2 font-bold flex items-center justify-start space-x-2"><FaMapMarkedAlt size={20} /> <span className="truncate">Location : 12 a Kanahappapuram / anjugraman post kk dist</span></div>
                    <div className=" montserrat-font text-sm  font-bold flex justify-between space-x-2">
                        <div className="text-gray-700 bg-gray-100 grow-7 flex items-center  rounded-md pl-2 justify-start space-x-2"> <FaRegMoneyBillAlt size={25} /> <span>Rate :  &#8377; 400000
                        </span> </div>
                        <button className="w-fit rounded-md text-white bg-[#c31f25] text-bold p-2" >Contact Owner</button>
                    </div>
                </div>

                {/* END DIV */}
                <div className=" montserrat-font w-[25%] flex flex-col p-2 space-y-2">
                    <div className="  h-[25%] w-full rounded-md text-sm bg-[#f5f5f5] flex justify-start space-x-2 pl-2 items-center text-gray-700" ><TbRulerMeasure size={20} /><span>2500 sq ft</span></div>
                    <div className="  h-[25%] w-full rounded-md text-sm bg-[#f5f5f5] flex justify-start space-x-2 pl-2 items-center text-gray-700" ><MdSell size={20} /><span>For sale</span></div>
                    <div className="  h-[25%] w-full rounded-md text-sm bg-[#f5f5f5] flex justify-start space-x-2 pl-2 items-center  text-gray-700" ><FaPhoneAlt size={15} /><span>6324578419</span> </div>
                    <button className="  h-[25%] w-full border-2 border-[#c31f25] rounded-md hover:text-white hover:bg-[#c31f25] text-bold  text-[#c31f25]" >More info </button>
                </div>
            </div>
        </>
    )
}

export default LandCard;