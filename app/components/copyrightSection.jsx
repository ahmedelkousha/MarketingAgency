

export default function CopyrightSection() {
    return (
        <div className="mx-auto md:max-w-[1300px] bg-[#ffffff] py-[6%] md:py-[3%] flex flex-col md:items-center justify-center gap-y-[30px] gap-x-[20%] md:gap-x-[5%] md:px-[10%] flex-wrap">

            <hr className="text-black bg-black w-[100%] h-[1px]" />
            <div className="flex md:flex-row flex-col justify-between items-center gap-y-[6px] gap-[3%] w-full text-nowrap md:text-sm text-xs">
                <div><a className="text-blue-700 hover:text-orange-500 duration-100" href="#">AWS</a>{`${' | Digital Marketing Company. All Rights Reserved.'}`}</div>
                <div className="flex flex-row gap-[6px]">
                    <a className="hover:text-orange-500 duration-100" href="#">Terms of Service</a> {`${' | '}`}
                    <a className="hover:text-orange-500 duration-100" href="#">Policy</a> {`${' | '}`}
                    <a className="hover:text-orange-500 duration-100" href="#">Help</a>
                </div>
            </div>

        </div>
    )
}
