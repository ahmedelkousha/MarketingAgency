import Link from "next/link";

export default function CopyrightSection() {
    return (
        <div className="mx-auto md:max-w-[1300px] bg-[#ffffff] py-[6%] md:py-[3%] flex flex-col md:items-center justify-center gap-y-[30px] gap-x-[20%] md:gap-x-[5%] md:px-[10%] flex-wrap">

            <hr className="text-black bg-black w-[100%] h-[1px]" />
            <div className="flex md:flex-row flex-col justify-between items-center gap-y-[6px] gap-[3%] w-full text-nowrap md:text-sm text-xs">
                <div><Link className="text-blue-700 hover:text-orange-500 duration-100" href="#">AWS</Link>{`${' | Digital Marketing Company. All Rights Reserved.'}`}</div>
                <div className="flex flex-row gap-[6px]">
                    <Link className="hover:text-orange-500 duration-100" href="#">Terms of Service</Link> {`${' | '}`}
                    <Link className="hover:text-orange-500 duration-100" href="#">Policy</Link> {`${' | '}`}
                    <Link className="hover:text-orange-500 duration-100" href="#">Help</Link>
                </div>
            </div>

        </div>
    )
}
