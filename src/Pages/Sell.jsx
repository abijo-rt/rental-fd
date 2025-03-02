import { useState , useEffect } from "react";
import BuyHouse from "../CustomComponents/Form/BuyHouse";
import FormProvider from "../CustomComponents/Form/FormProvider";

const changeForm = (cate,type) => {

    // alert(cate + " " + type)

    switch (cate) {
        case 'buy':
            // nested swtich buy
            switch (type) {
                case 'house':
                    return { cate :"b",type:type}
                case 'vehicle':
                    return { cate :"b",type:type}
                case 'land':
                    return { cate :"b",type:type}
            }
            break;

        case 'rent':
            // nested swtich buy
            switch (type) {
                case 'house':
                    return { cate :"r",type:type}
                case 'vehicle':
                    return { cate :"r",type:type}
                case 'land':
                    return { cate :"r",type:type}
            }
            break;

        case 'bid':
            // nested swtich buy
            switch (type) {
                case 'house':
                    return {cate:"bi",type:type}
                case 'vehicle':
                    return {cate:"bi",type:type}
                case 'land':
                    return {cate:"bi",type:type}
                      }

            break;
    }
}

const Sell = () => {
    
    const [form , setform] = useState();
    const [cate,setCate] = useState("buy");
    const [type,setType] = useState("house");

    const chageFormLayout = (cate,type) => {
        setCate(cate);
        setType(type);
        setform(changeForm(cate,type))
    }

    const active = "bg-[#c31f25] text-white border-2 border-red-700 "; // Active button styling
    const notactive = "";

    useEffect(()=>{

    },[setform])

    return (
        <>
            {/* MAIN CONTAINER */}
            <div className=" h-full w-full flex items-center justify-center flex-col bg-green-100 ">
            {/* Dummy div for header */}
            <div className="h-[10%]"></div>
            {/* FORM CONTAINER */}
              <div className="h-[80%] w-[60%] bg-gray-50 rounded-lg flex flex-col border border-gray-300">
                {/* FORM HEADER */}
                <div className="h-[15%] border-b-gray-300 border-b flex bg-gray-100 rounded-t-md">
                    <div className="montserrat-font text-gray-700 h-full w-[50%] p-2 pl-10 flex flex-col space-y-2">
                        <span className=" ">Type of Bussiness  : </span>
                        <div className="h-full w-full space-x-2"> 
                            <button onClick={()=>{chageFormLayout('buy',type)}}  className={` ${cate=='buy' ? active : notactive } border border-gray-400 rounded-md w-[20%]`} >Buy</button>
                            <button onClick={()=>{chageFormLayout('rent',type)}} className={` ${cate=='rent' ? active : notactive } border border-gray-400 rounded-md w-[20%]`} >Rent</button>
                            <button onClick={()=>{chageFormLayout('bid',type)}}  className={` ${cate=='bid' ? active : notactive } border border-gray-400 rounded-md w-[20%]`} >Bid</button>
                        </div>
                    </div>
                    <div className="montserrat-font text-gray-700 h-full w-[50%] p-2 pl-10 flex flex-col space-y-2">
                        <span className=" ">Type of Property  : </span>
                        <div className="h-full w-full space-x-2">  
                             <button onClick={()=>{chageFormLayout(cate,'house')}} className={` ${type == 'house' ? active : notactive } border border-gray-400 rounded-md w-[20%]`} >House</button>
                             <button onClick={()=>{chageFormLayout(cate,'vehicle')}} className={` ${type == 'vehicle' ? active : notactive } border border-gray-400 rounded-md w-[20%]`} >Vehicle</button>
                             <button onClick={()=>{chageFormLayout(cate,'land')}} className={` ${type == 'land' ? active : notactive } border border-gray-400 rounded-md w-[20%]`} >Land</button>
                        </div>
                    </div>
                </div>
                {/* FORM BOGY */}
                <div className="h-[85%] w-full  " >
                
                <FormProvider cate={cate} type={type}/>
                
                </div>
              </div>
            </div>
        </>
    )
}

export default Sell;