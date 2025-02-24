// import {Island} from 'phosphor-react'
import { FaCar } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { PiIslandFill } from "react-icons/pi";
import wave from '../assets/wave.svg'
 const VerticalBar = () => {

    return (
        <>
            <div className=" flex h-[10%] w-full bg-green-100 items-center justify-center space-x-20" >
                <span className="flex items-center justify-center shadow-green-400 shadow-sm  size-24 bg-white rounded-4xl"><FaCar size={50}/></span>
                <span className="flex items-center justify-center shadow-green-400 shadow-sm  size-24 bg-white rounded-4xl"><BsHouseFill size={50}/></span>
                <span className="flex items-center justify-center shadow-green-400 shadow-sm  size-24 bg-white rounded-4xl"><PiIslandFill size={50}/></span>
            </div>
             <div className='bg-green-100'>
                    <img src={wave} />

                    </div>
        </>
    )

}

export default VerticalBar;