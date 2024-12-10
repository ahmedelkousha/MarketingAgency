import HelpSectionCard from "./helpSectionCard"

const HELP_SECTION_CARD = [
    { iconSrc: "/getSupport.icon.png", cardHead: "Get Support", cardPar: "Homero sapientem per id, id sonet veniam commune vis, ei nam non", btnPar: "Go to support", iconAlt: "get support" },
    { iconSrc: "/comIcon.icon.png", cardHead: "Our Community", cardPar: "Homero sapientem per id, id sonet veniam commune vis, ei nam non", btnPar: "Go to community", iconAlt: "our community" },
    { iconSrc: "/faq.icon.png", cardHead: "F.A.Q", cardPar: "Homero sapientem per id, id sonet veniam commune vis, ei nam non", btnPar: "Go to FAQ", iconAlt: "faq" }
]

export default function HelpSection() {
    return (
        <div className="bg-[#403595] md:w-full max-h-fit py-[12%] md:py-[6%] md:h-fit flex md:flex-nowrap flex-wrap md:flex-row justify-center gap-8 px-[5%]">

            {HELP_SECTION_CARD.map((section, index) => (
                <HelpSectionCard key={index} iconSrc={section.iconSrc} cardHead={section.cardHead} cardPar={section.cardPar} btnPar={section.btnPar} iconAlt={section.iconAlt} />
            ))}

        </div>
    )
}
