import FooterRow from "./footerRow"
import Image from "next/image"

const ELEMENTS_ARRAY = [
    [
        { name: "Landing Page", src: "#" },
        { name: "Email Marketing", src: "#" },
        { name: "HTML template", src: "#" },
        { name: "Angular builder", src: "#" },
        { name: "WordPress theme", src: "#" }
    ],
    [
        { name: "About Us", src: "#" },
        { name: "Services", src: "#" },
        { name: "Career", src: "#" },
        { name: "Contact", src: "#" }
    ],
    [
        { name: "Blog", src: "#" },
        { name: "F.A.Q", src: "#" },
        { name: "Testinomials", src: "#" },
        { name: "Site map", src: "#" }
    ]
]

export default function Footer() {
    return (
        <div className="md:max-w-[1500px] md:h-[450px] bg-[#ffffff] my-0 mx-auto py-[12%] md:py-[4%] flex md:flex-row items-start md:justify-center justify-start gap-y-[65px] gap-x-[10%] md:gap-x-[5%] px-[8%] md:flex-nowrap flex-wrap">

            <div className="flex flex-col gap-[20px] w-[270px]">
                <h1 className="text-[26px] font-[700] md:mb-[10px] mb-[10px] grow-[2]">
                    DWS
                </h1>
                <span>St.Kemacetan timur No.13 Block Q2 Jakarta - Indonesia</span>
                <div className="flex flex-row gap-2 justify-start items-center text-nowrap">
                    <Image width={15} height={15} style={{ width: "15px", height: "18px" }} src="/phone.png" alt="phone icon" />
                    <a href="#">(021) 111-222-333-44</a>
                </div>
                <div className="flex flex-row gap-2 justify-start items-center text-nowrap">
                    <Image width={15} height={15} style={{width:"15px", height:"15px"}} src="/email.png" alt="email icon" />
                    <a href="#">info@yourdomain.com</a>
                </div>
            </div>

            <div className="max-w-[170px] text-nowrap ">
                <h2 className="md:mb-[40px] mb-[20px] font-semibold">Product</h2>
                <FooterRow elementsArray={ELEMENTS_ARRAY[0]} />
            </div>

            <div className="max-w-[170px] text-nowrap ">
                <h2 className="md:mb-[40px] mb-[20px] font-semibold">Company</h2>
                <FooterRow elementsArray={ELEMENTS_ARRAY[1]} />
            </div>

            <div className="max-w-[170px] text-nowrap">
                <h2 className="md:mb-[40px] mb-[20px] font-semibold">Resources</h2>
                <FooterRow elementsArray={ELEMENTS_ARRAY[2]} />
            </div>

            <div className="flex flex-col max-w-[270px]">
                <h2 className="md:mb-[40px] mb-[20px] font-semibold">Follow us</h2>
                <div className="flex flex-row gap-2">

                    <a href="#" className="bg-[#EAEEF4] w-[33px] h-[33px] rounded-full flex flex-row justify-center items-center hover:bg-slate-300 hover:-translate-y-1 duration-300">
                        <Image width={12} height={12} src="/fbIcon.png" />
                    </a>

                    <a href="#" className="bg-[#EAEEF4] w-[33px] h-[33px] rounded-full flex flex-row justify-center items-center hover:bg-slate-300 hover:-translate-y-1 duration-300">
                        <Image width={18} height={18} src="/twitterIcon.png" />
                    </a>

                    <a href="#" className="bg-[#EAEEF4] w-[33px] h-[33px] rounded-full flex flex-row justify-center items-center hover:bg-slate-300 hover:-translate-y-1 duration-300">
                        <Image width={18} height={18} src="/linkedinIcon.png" />
                    </a>

                    <a href="#" className="bg-[#EAEEF4] w-[33px] h-[33px] rounded-full flex flex-row justify-center items-center hover:bg-slate-300 hover:-translate-y-1 duration-300">
                        <Image width={18} height={18} src="/youtubeIcon.png" />
                    </a>

                </div>
            </div>

        </div>
    )
}
