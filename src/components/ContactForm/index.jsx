import { SwitchButton } from "..";
import RadioButton from "../RadioButton";

export default function index(){
    return (
        <>
            <form action="" className="flex flex-col gap-y-5 w-full">
                <div className="flex flex-row gap-x-5 w-full">
                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="" className="text-[1rem] font-SG">First name</label>
                        <input type="text" name="fname" id="fname" className="border w-full border-[#c19b7c] rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-1/2">
                        <label htmlFor="" className="text-[1rem] font-SG">Last name</label>
                        <input type="text" name="lname" id="lname" className="border w-full border-[#c19b7c] rounded-md p-2" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 md:flex-row w-full gap-x-5">
                    <div className="flex flex-col md:w-1/2">
                        <label htmlFor="" className="text-[1rem] font-SG">Email</label>
                        <input type="email" name="email" id="email" className="border w-full border-[#c19b7c] rounded-md p-2" />
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <label htmlFor="" className="text-[1rem] font-SG">Phone number</label>
                        <input type="text" name="phone" id="phone" className="border w-full border-[#c19b7c] rounded-md p-2" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-[1rem] font-SG">Choose a topic</label>
                    <select name="" id="" className="border w-full border-[#c19b7c] rounded-md p-2">
                        <option value="">Select one...</option>
                        <option value="">Billing Issues</option>
                        <option value="">Returns</option>
                        <option value="">Press Questions</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="" className="text-[1rem] font-SG">What best describes you?</label>
                    <RadioButton />
                </div>
                <div className="flex flex-col gap-y-5">
                    <label htmlFor="" className="text-[1rem] font-SG">Message</label>
                    <textarea name="" id="" className="w-full h-20 border min-h-[11.25rem] border-[#c19b7c] rounded-md p-2" placeholder='Type your message...'></textarea>
                </div>
                <div className="flex flex-col gap-y-5">
                    <SwitchButton />
                </div>
                <div className="flex">
                    <button className="text-center bg-[#3c6469] font-normal text-xs 
                    text-white py-2 px-4 rounded font-SG shadow-button-shadow">
                        SUBMIT
                    </button>
                </div>
            </form>
        </>
    )
}