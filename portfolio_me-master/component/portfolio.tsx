import { animateEnum, navItem } from "../datas/home.data"
import portfolioData from "../datas/portfolio.data"
import { primarySkill } from "../datas/skills.data"
import Container from "./container"

const Portfolio = ({ nav, changeNav, animate }: { nav: string, changeNav: (nav: string) => void, animate: animateEnum }) => {
    return (
        <Container navCurrent={navItem[4]} nav={nav} changeNav={changeNav} animate={animate} title1={'Technologies and Services I Leverage'} title2={'Tech Stacks I employ to build, optimize, and scale modern applications.'}>

            <div className="mx-2 w-full md:mx-0 mb-5  md:px-8 md:py-8 mt-8 md:mt-0">
                <h3 className="font-bold md:text-[1.65rem] text-[1.3rem] mb-8">Services</h3>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        portfolioData.map((data, index) => {
                            return (
                                <div key={index} className="shadow-custom animate-slideup transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 drop-shadow-2xl  cursor-pointer hover:shadow-2xl  rounded-md  p-8">
                                    <div className="pb-5">
                                        <img src={`/icons/${data.icon}`} className="w-12 h-12" alt="" />
                                    </div>
                                    <h1 className="font-bold text-xl pb-3">{data.title}</h1>
                                    <p className="text-gray-500">{data.description}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className=' p-8  '>
                <h3 className="font-bold md:text-[1.65rem] text-[1.3rem] mb-8">Familiar Stack, Frameworks and Tools</h3>
                <div className="grid grid-cols-4 md:grid-cols-12">
                    {
                        primarySkill.map((data, index) => {
                            return (
                                <div key={index}>
                                    <a className="bg-custom cursor-pointer inline-block text-[16px] rounded-md  transition-all duration-500  items-center ease-in-out  shadow-custom p-3 hover:-translate-y-1 ">
                                        {data.icon}
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>

            </div>


        </Container>
    )
}

export default Portfolio