

export default function index(props) {
    return (
        <section className="flex flex-col sm:flex-row-reverse justify-between py-20">
            <div className="sort pr-4 flex text-[#3C6469] font-semibold font-SG justify-end mb-10 " role="button">
                Sort by
                <i class='bx bx-chevron-down text-[24px] '></i>
            </div>
            <div className="filter sm:w-[70%] lg:w-[40%] w-[100%] grid grid-cols-3 sm:grid-cols-5  text-[#3C6469] font-semibold font-SG self-start justify-evenly ">
                <button>View all</button>
                <button>Woman</button>
                <button>Men</button>
                <button className="px-20 sm:px-0">RuckSacks</button>
                <button className="px-20 sm:px-0">Footwear</button>
            </div>

        </section>
    )
  }
  