import { useState } from "react";

export default function AgreeButton(){
    const [agree,setAgree] = useState(false);
    const handleAgree = () => {
        if(agree == false){
            setAgree(true)
        }
        else{
            setAgree(false)
        }
    }
    return (
        <>
            <label htmlFor="" className="text-[1rem] flex flex-row gap-x-2 items-center hover:cursor-pointer">
                <div className={`w-10 rounded-full border p-1 border-[#c19b7c] transition-all ease-in duration-[300ms] flex ${agree ? 'justify-end bg-[#3c6469]' : 'bg-white justify-start'}`} onClick={handleAgree}>
                    <div className={`rounded-full p-1 w-3 h-3 bg-[#c19b7c]`}></div>
                </div>
                <span className="text-[1rem] font-SG">I accept the <span className="underline">Terms</span></span>
            </label>
        </>
    )
}