export default function index({title, text, img}) {
    return (
      <section className=" bg-white shadow-xl hover:shadow-2xl sm:flex">
        <div className="p-[1.5em] sm:py-20 font-SG sm:w-[50%]">
          <h1 className="text-[#3C6469] font-bold text-[2rem]">{title}</h1>
          <p className="text-[0.9em]">{text}</p>
        </div>
        <img src={img} alt="" 
             className="w-[100%] sm:w-[50%]"/>
      </section>
    )
  }
  