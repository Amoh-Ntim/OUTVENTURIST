import { useState } from "react";

export default function RadioButton(){
    const [radio,setRadio] = useState('radio1');
    const handleRadioChange = (e) => {
        setRadio(e.target.value)
    }
    return (
        <>
            <div className="flex flex-row flex-wrap gap-y-5">
                <label htmlFor="radio1" className='w-1/2 flex flex-row items-center gap-x-2 justify-start relative hover:cursor-pointer'>
                    <div className={`rounded-full w-5 h-5 border border-[#c19b7c] bg-clip-content p-1 ${radio === 'radio1' ? 'bg-[#c19b7c] border-[#3c6469]' : ''}`}></div>
                    <input className='absolute opacity-0' type="radio" value="radio1" id="radio1" onChange={handleRadioChange} checked={radio === 'radio1'} />
                    <span className="text-[1rem] font-SG">Customer</span>
                </label>
                <label htmlFor="radio2" className='w-1/2 flex flex-row items-center gap-x-2 justify-start relative hover:cursor-pointer'>
                    <div className={`rounded-full w-5 h-5 border border-[#c19b7c] bg-clip-content p-1 ${radio === 'radio2' ? 'bg-[#c19b7c] border-[#3c6469]' : ''}`}></div>
                    <input className='absolute opacity-0' type="radio" value="radio2" id="radio2" onChange={handleRadioChange} checked={radio === 'radio2'} />
                    <span className="text-[1rem] font-SG">Press</span>
                </label>
                <label htmlFor="radio3" className='w-1/2 flex flex-row items-center gap-x-2 justify-start relative hover:cursor-pointer'>
                    <div className={`rounded-full w-5 h-5 border border-[#c19b7c] bg-clip-content p-1 ${radio === 'radio3' ? 'bg-[#c19b7c] border-[#3c6469]' : ''}`}></div>
                    <input className='absolute opacity-0' type="radio" value="radio3" id="radio3" onChange={handleRadioChange} checked={radio === 'radio3'} />
                    <span className="text-[1rem] font-SG">Distributor</span>
                </label>
            </div>
        </>
    )
}