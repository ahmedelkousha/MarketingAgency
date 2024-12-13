import Link from "next/link";

export default function FooterRow({ elementsArray}) {
    return (
        <div className="flex flex-col gap-[20px]">
            {elementsArray.map((element, index) => (
                <Link className="w-fit hover:underline hover:translate-x-1 duration-300" key={index} href={element.src}>{element.name}</Link>
            ))}
        </div>
    )
}
