import { useState } from "react"

import { waists, sizes } from "./option-data"


export default function index({ name, quantity, onInputChangeHandler }) {
  const [selectedOption, setSelectedOption] = useState("")

  const onSelectOptionHandler = (event) => {
    setSelectedOption(event.target.value)   
  }


  return (
    <section className="mt-7">
      {name?.includes("Trousers") && (
        <section>
          <p className="text-base font-SG leading-6">Waist</p>
          <select
            value={selectedOption}
            onChange={onSelectOptionHandler}
            className="border border-[#c19b7c]
              outline-none py-2 pl-2 w-[100%] bg-white
              mt-2 font-SG text-base rounded"
          >
            <option>Select Waist</option>
            {waists.map((waist) => (
              <option
                value={waist.name}
                key={waist.id}
              >
                {waist.name}
              </option>
            ))}
          </select>
        </section>
      )}

      {name?.includes("Boots") && (
        <section>
          <p className="text-base font-SG leading-6">Size</p>
          <select
            value={selectedOption}
            onChange={onSelectOptionHandler}
            className="border border-[#c19b7c]
              outline-none py-2 pl-2 w-[100%] bg-white
              mt-2 font-SG text-base rounded"
          >
            <option>Select Size</option>
            {sizes.map((size) => (
              <option
                value={size.size}
                key={size.id}
              >
                {size.size}
              </option>
            ))}
          </select>
        </section>
      )}

      <section className="mt-3">
        <p className="text-base font-SG leading-6">Quantity</p>
        <input
          type="number"
          value={quantity}
          onChange={onInputChangeHandler}
          className="w-[20%] border border-[#c19b7c] py-1.5
          px-2 outline-none rounded font-SG leading-[25.6px]
          mt-2"
        />
      </section>
    </section>
  )
}
