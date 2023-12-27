import { Navbar, Banner, ActivityInfoCard, FilterButtons, NoProductCard, } from "../../components"



export default function index() {
  const title = "Watersports"
  const text = "Discover watersports essentials at Outventurist, including inflatables, aqua shoes, and wetsuits for all. Shop our store for beach adventures, both local and abroad."
  const img = "https://assets.website-files.com/64515ac135d5d28b9772c12b/6497f3380010a54e57884738_6497f320fd6cd117a567075c_1bea5779-f87a-4418-b285-5550bd49eebf.webp"
    return (
      <section className="w-[100%] h-[100vh] ">
        <nav className="fixed w-[100%] top-0 left-0 bg-white">
          <Navbar />
          <Banner/>
        </nav>
        <section className="w-[100%] bg-[url(https://assets.website-files.com/64515ac135d5d25fb072c123/64527903ce0c39524136b3fa_Line%20Bow%203.svg)] bg-right bg-repeat-x px-[5%] py-36 pb-5">
            <ActivityInfoCard title={title} text={text} img={img}/>
            <FilterButtons />
            <NoProductCard />
        </section>
      </section>
    )
  }
  