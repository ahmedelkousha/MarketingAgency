import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function HelpSectionCard({ iconSrc, cardHead, cardPar, btnPar, iconAlt }) {
    return (
        <div className="flex flex-row justify-center items-start md:w-[370px] md:max-h-[260px] bg-[#ffffff] md:px-[1.8%] md:py-[1.8%] gap-3 rounded-lg py-[6%] px-[4%]">

            <div className="min-w-[40px]">
                <Image src={iconSrc} alt={iconAlt} width={60} height={60} />
            </div>

            <div className="flex flex-col items-start gap-[16px] h-full">
                <h2>{cardHead}</h2>
                <p>{cardPar}</p>
                <button className="group/item flex flex-row justify-center items-center md:gap-3 gap-2 min-w-max mt-auto">
                    {btnPar} <FaLongArrowAltRight className="group-hover/item:translate-x-2 duration-300" />
                </button>
            </div>

        </div>
    )
}
