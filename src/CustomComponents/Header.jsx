import {Link} from 'phosphor-react'
import { NavLink } from 'react-router-dom';
const Header = () => {

    return (
        <>
            <div className=" h-[10%] w-full  flex  items-center shadow-sm fixed bg-green-100">
               <div className="w-[20%] flex  items-center pl-5 space-x-2">
                    <span className="text-2xl font-bold text-green-900">Property</span>
                    <Link size={32} />
                    <span className="text-2xl font-bold">Linker</span>
               </div>
               <div className=' montserrat-font h-full flex w-[55%] items-center '  >
                    <NavLink to="/" className=' p-5 font-semibold  flex items-center  h-full'>Home</NavLink>
                    <NavLink to="/myproperty" className=' p-5 font-semibold  flex items-center  h-full'>My Property</NavLink>
                    <NavLink to="/order" className=' p-5 font-semibold  flex items-center  h-full'>Order</NavLink>
                    <NavLink to="/sell" className=' p-5 font-semibold  flex items-center  h-full'>Want to sell ?</NavLink>
               </div>
               <div className="w-[25%] h-full flex items-center justify-end pr-10">
                
                    <button className=" border-2 rounded-sm text-xl h-[60%] w-[50%]">Log in</button>
               </div>
            </div>
        </>
    )



}

export default Header;