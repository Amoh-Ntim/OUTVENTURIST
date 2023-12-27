import { ActivityCard } from "..";

export default function index() {
  const Watersports ={
    head: "Watersports",
    description: "Stay ready for countryside strolls or mountain hikes with Outventurist's outdoor attire. Find walking boots, rucksacks, hiking poles, and waterproof clothing to keep you warm and dry in any weather.",
    img: "https://assets.website-files.com/64515ac135d5d28b9772c12b/645397bce735de80103da129_Watersports-min-p-500.png"
  }
  const Hiking ={
    head: "Hiking",
    description: "Stay ready for countryside strolls or mountain hikes with Outventurist's outdoor attire. Find walking boots, rucksacks, hiking poles, and waterproof clothing to keep you warm and dry in any weather.",
    img: "https://assets.website-files.com/64515ac135d5d28b9772c12b/6453936b26c527627d1cc8ab_64539330350899de18356323_Hiking.webp"
  }
  const Camping ={
    head: "Camping",
    description: "Gear up for summer adventures with Outventurist's top-notch camping selection. Find tents, sleeping bags, furniture, and accessories in various sizes and designs for festivals or family trips.",
    img: "https://assets.website-files.com/64515ac135d5d28b9772c12b/64539f34a79e9d837d4250a0_Camping-min-p-1080.png"
  }


    return (
      <section className="pt-16 px-5 bg-[url(https://assets.website-files.com/64515ac135d5d25fb072c123/64527869e17c7284b3cc7845_Lines%20Bow%201_1.svg)]
        bg-left 2xl:px-0  lg:w-[95%] 2xl:w-[65%] mx-auto">
        <h1 className="text-[#3C6469] text-[1.8em] font-SG font-bold sm:mb-12">By Activity</h1>
        <div className="md:flex gap-10 lg:gap-7">
        <div className="">
          <ActivityCard
            title={Watersports.head}
            info={Watersports.description}
            img={Watersports.img}
            classStyle={"sm:flex sm:items-center bg-white w-[100%] flex-row mb-10 lg:mb-7 rounded-md shadow-lg hover:shadow-2xl "}
            imgStyle={"sm:w-[60%] sm:h-[320px] md:w-[50%] md:h-50% object-cover"}
          />

          <ActivityCard 
            title={Hiking.head}
            info={Hiking.description}
            img={Hiking.img}
            imgStyle={"object-cover"}
            classStyle={"md:hidden bg-white mb-10 rounded-md shadow-lg hover:shadow-2xl"}
          />

          <ActivityCard 
            title={Camping.head} 
            info={Camping.description} 
            img={Camping.img} 
            classStyle={"sm:flex sm:items-center bg-white w-[100%] flex-row mb-10 rounded-md shadow-lg hover:shadow-2xl"}
            imgStyle={"sm:w-[60%] sm:h-[320px] md:w-[50%] xl:w-[45.5%] object-cover"}
          />
        </div>
        <div className="">
        <ActivityCard 
            title={Hiking.head}
            info={Hiking.description}
            img={Hiking.img}
            imgStyle={"md:h-[450px] md:w-[100%] object-cover  transition duration-[0.5s] ease-in-out hover:cursor-pointer"}
            classStyle={"hidden md:block bg-white mb-10 rounded-md shadow-lg "}
          />
        </div>
        </div>
      </section>
    )
  }
  