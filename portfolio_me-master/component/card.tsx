import { AcademicInterface, ExperienceInterface, Type } from "../datas/education-experience.data"
import { IoGlobeOutline } from "react-icons/io5"
const AcademicCard = (props: AcademicInterface | any) => {
    return (

        <div className="border-l-[#161616] animate-slideup md:border-l-4   border-solid  md:pl-9 last:pb-0 pb-10">
            <div className="group relative  shadow-custom rounded-md hover:bg-black cursor-pointer    pl-8    bg-[#161616]  py-8 md:px-12">
                <span className="mt-0.5 hidden md:block  after:absolute after:w-8 after:h-[0.300rem]  after:bg-[#161616] after:-left-8 after:top-[2.45rem]  before:absolute before:border-4 before:border-[#161616]  before:group-hover:bg-[#009e66]  before:bg-gray-800  before:p-[0.3rem] before:rounded-full before:-left-[2.9rem]  before:h-3 before:w-3"></span>
                <h5 className="font-medium mb-3  first:leading-8   text-xl">{props.data.title}</h5>
                <p className="mb-2 text-gray-400 group-hover:text-white">{props.data.shortDetails}</p>
                {props.data.marks && <p className="mb-2 text-gray-400 group-hover:text-white"><span>marks</span>:{props.data.marks}</p>}
                <p className=" group-hover:text-white text-gray-600">{props.data.description}</p>
            </div>
        </div>
    )
}

const ExperienceCard = (props: ExperienceInterface | any) => {
    return (
        <div className="border-l-[#161616] animate-slideup md:border-l-4   border-solid  md:pl-9 last:pb-0 pb-10">
            <div className="group relative  shadow-custom rounded-md hover:bg-black cursor-pointer    pl-8    bg-[#161616]  py-8 md:px-12">
                <span className="mt-0.5 hidden md:block   after:absolute after:w-8 after:h-[0.300rem]  after:bg-[#161616] after:-left-8 after:top-[2.45rem]  before:absolute before:border-4 before:border-[#161616]  before:group-hover:bg-[#009e66]  before:bg-gray-800  before:p-[0.3rem] before:rounded-full before:-left-[2.9rem]  before:h-3 before:w-3"></span>
                <h5 className="font-medium mb-3   text-xl">{props.data.office}</h5>
                <p className="mb-2 group-hover:text-white  text-gray-400 flex gap-2"><span>Role:</span>{props.data.roles}</p>
                <p className="mb-2 group-hover:text-white text-gray-400 flex gap-2"><span>Stack:</span>{props.data.stack}</p>
                <p className="mb-2 group-hover:text-white text-gray-400 flex gap-2"><span>Working hour:</span>{props?.data?.workinghour}</p>
                {props?.data?.site && <p className="mb-2 group-hover:text-white text-gray-400 flex gap-2"><span>Site</span>:<a target={'_blank'} href={props.data.site} className="text-[#009e66]">{props.data.site}</a></p>}
                <p className=" text-gray-600 group-hover:text-white flex gap-2">{props?.data?.description}</p>
            </div>
        </div>
    )
}

export {
    AcademicCard, ExperienceCard
}