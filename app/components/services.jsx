import { FaLongArrowAltRight } from "react-icons/fa";

const data = [
  {
    title: "All in one package",
    description: "Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.",
    icon: "/gift.svg"
  },
  {
    title: "Send Campaign",
    description: "Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.",
    icon: "/paper-plane.svg"
  },
  {
    title: "Easy to use",
    description: "Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.",
    icon: "/cogs.svg"
  },
  {
    title: "New Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/flask.svg"
  },
  {
    title: "Branch system",
    description: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    icon: "/tree.svg"
  },
  {
    title: "Large Storage",
    description: "In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.",
    icon: "/hard-disk.svg"
  },
  {
    title: "Manual Guide",
    description: "Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.",
    icon: "/book.svg"
  },
  {
    title: "Actual Report",
    description: "Cras gravida tristique justo sit amet tristique. Integer nisl dui, posuere at est id.",
    icon: "/chart.svg"
  },
  {
    title: "Fully responsive",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    icon: "/device.svg"
  }
];

function Services() {
  return (
    <>
      <section className="flex justify-center items-start min-h-screen pt-16 w-full">
        <div className="container mx-auto flex justify-center items-center flex-col p-10">
          <header className="text-center mb-5">
          <h1 className="text-[28px] font-bold mb-2 px-4 w-[340px] h-[92px] md:text-3xl md:w-[355px] tracking-wider">
              We build awesome marketing templates
            </h1>
            <img src="/991cd436d30a9b81275808fbae79e10e.png" alt="Decoration" className="w-20 h-2 mx-auto" />
          </header>
          <article className="text-center mb-20 md:my-5 w-[270px] md:w-[770px] h-[48px]">
            <p className="text-sm mb-2">Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut sed ornatus tibique, fabellas pertinax est cu.</p>
            <p className="text-sm">Te odio omittam mea, ea tractatos dissentiunt complectitur nec. Liber voluptatum ad vis.</p>
          </article>
          <div className="flex flex-wrap p-5 w-screen max-w-screen-lg">
            {data.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-start cursor-pointer">
                <div className="flex mb-4">
                  <img src={item.icon} alt={item.title} className="w-16 h-16 mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full max-w-lg h-auto flex flex-wrap p-5 justify-center items-center">
            <img src="/125fc2d1dda27a0debcf60380e77614a.png" alt="Marketing Image" className="w-full h-auto" />
          </div>
          <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center cursor-pointer">
              <img src="/bb14bcbf98b4a1a17df8575d380900e8.png" alt="Working Image" className="w-full h-auto" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-full max-w-md">
                <h2 className="text-2xl w-full p-2">
                  About Smoot Template
                </h2>
                <p className="w-full p-2 my-4">
                  Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut sed ornatus tibique, fabellas pertinax est cu. Te odio omittam mea, ea tractatos dissentiunt complectitur nec.
                </p>
                <button className="w-40 h-12 bg-blue-600 rounded-full my-4 text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg h-auto flex flex-wrap p-5 justify-center items-center">
            <img src="/7ef1b3a78b463c71b50d64d58d053983.png" alt="Marketing Image" className="w-full h-auto" />
          </div>

          <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex justify-center items-center gap-2 order-2 md:order-1">

              <div className="w-full max-w-md">
                <h2 className="text-2xl w-full p-2">
                Vision and Mission
                </h2>
                <p className="w-full p-2 my-4">
                Et odio honestatis ius. Exerci numquam
                consequuntur no mei. Ut sed ornatus tibique,
                fabellas pertinax est cu. Te odio omittam mea, ea
                tractatos dissentiunt complectitur nec.
                </p>
                <button className="w-40 h-12 bg-blue-600 rounded-full my-4 text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                  Learn more
                </button>
              </div>

              </div>

              <div className="flex justify-center items-center cursor-pointer order-1 md:order-2">
              <img src="/46ac0994b5d72253b1d8db3a7c2ecf88.png" alt="Working Image" className="w-full h-auto" />
              </div>
          
          </div>
          <div className="w-full max-w-lg h-auto flex flex-wrap p-5 justify-center items-center">
            <img src="/125fc2d1dda27a0debcf60380e77614a.png" alt="Marketing Image" className="w-full h-auto" />
          </div>
          <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center cursor-pointer">
              <img src="/9c401dbe989f90de53ab3bed12133ca1.png" alt="Working Image" className="w-full h-auto" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-full max-w-md">
                <h2 className="text-2xl w-full p-2">
                Other Software Product
                </h2>
                <p className="w-full p-2 my-4">
                      Et odio honestatis ius. Exerci numquam
                      consequuntur no mei. Ut sed ornatus tibique,
                      fabellas pertinax est cu. Te odio omittam mea, ea
                      tractatos dissentiunt complectitur nec.
                </p>
                <button className="w-40 h-12 bg-blue-600 rounded-full my-4 text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                  Learn more 
                </button>
              </div>
            </div>
          </div>                      
          <div className="banner  h-[247px] bg-purple-800 relative rounded-lg my-5">
            <img src="/0d0302359ca38eec6ff2c7e2715a8826.png" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="relative flex flex-col justify-center items-center h-full">
                <h1 className="text-white text-[22px] font-bold mb-10 md:w-[469.76px] h-[34px] md:text-3xl pl-2 pr-2 text-center">
                Let's try it's free trail for 30 days
                </h1>
                <div className="flex flex-col md:flex-row justify-end items-center gap-4 w-[80%]">
                        <button className="w-40 h-12 md:w-[170.52px] md:h-[51px]  flex justify-center items-center gap-2 bg-white rounded-full text-black transition-transform duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                        Click Me <FaLongArrowAltRight />
                      </button>       
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
