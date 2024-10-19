import React from 'react'
import { navItem } from '../datas/home.data'

const Close = ({ changeNav }: { changeNav: (change: string) => void }) => {
    return (
        <div className="fixed z-[99] right-[4vw] top-[10px] ">
            <div onClick={() => { changeNav(navItem[0]) }} className="cursor-pointer p-3">
                <span className="before:bg-white after:bg-white before:h-[2rem] after:h-[2rem] before:w-[4px] after:w-[4px] before:absolute after:absolute after:-rotate-45 before:rotate-45 relative">
                </span>
            </div>
        </div>
    )
}

export default Close