import { ActivityHeading, ActivityLinks } from "..";

export default function index({title, info, img, classStyle, imgStyle}) {
    return (
      <section className={`${classStyle} bg-white w-[100%] flex-row mb-20 border rounded-md shadow-xl`}>
        <div className="py-5 px-5 ">
          <ActivityHeading title={title}/>
            <p className="mb-3 text-black font-SG text-[0.9em]">{info}</p>
          <ActivityLinks />
        </div>
        <img src={img} alt=""  className={imgStyle} data-aos="zoom-in" data-aos-duration="300" />
      </section>
    )
  }
  