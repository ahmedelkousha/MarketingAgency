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
      <section className="flex justify-center items-start h-screen pt-16 w-full">
        <div className="container mx-auto flex justify-center items-center flex-col p-10">
          <header className="text-center mb-5">
            <h1 className="text-3xl font-bold mb-2 px-4 w-[430.81px] h-[92px]">
              We are build awesome marketing templates
            </h1>
            <img src="/991cd436d30a9b81275808fbae79e10e.png" alt="Decoration" className="w-[85px] h-[8px] mx-auto" />
          </header>
          <article className="text-center mb-5 w-[770px] h-[48px]">
            <p className="text-sm mb-2">Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut sed ornatus tibique, fabellas pertinax est cu.</p>
            <p className="text-sm">Te odio omittam mea, ea tractatos dissentiunt complectitur nec. Liber voluptatum ad vis.</p>
          </article>
          <div className="flex flex-wrap p-5 w-[1200px] h-[480px]">
            {data.map((item, index) => (
              <div key={index} className="w-1/3 p-4 flex flex-col items-start cursor-pointer">
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
          <div className="w-[720px] h-[186px] flex flex-wrap p-5 justify-center items-center">
            <img src="/125fc2d1dda27a0debcf60380e77614a.png" alt="Marketing Image" />
          </div>
          <div className="w-[1200px] h-[454px] grid grid-cols-2">
            <div className="flex justify-center items-center cursor-pointer">
              <img src="/bb14bcbf98b4a1a17df8575d380900e8.png" alt="Working Image" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[400px] h-[229px]">
                <h2 className="text-2xl w-[340.04px] h-[34px] p-2">
                  About Smoot Template
                </h2>
                <p className="w-[341.78px] h-[90px] p-2 my-4">
                  Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut sed ornatus tibique, fabellas pertinax est cu. Te odio omittam mea, ea tractatos dissentiunt complectitur nec.
                </p>
                <button className="w-[157.95px] h-[51px] bg-blue-600 rounded-full my-4 text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                  Learn more
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