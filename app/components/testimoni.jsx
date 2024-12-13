'use client'; // لأجل Next.js App Router

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimoni() {
  const cards = [{ title: 'Alexandro Oddol', image: '/e8df1343984278474a6b148aa7a691a0.png', },
  { title: 'Jacob Kingston', image: '/3052-11.jpg', },
  { title: 'Michael Crawford', image: '/6472122961_c6477930d1_b-460x460.jpg', },
  ];
  const instagramCards = [
    {
      user: 'john_doe',
      image: '/44b52e6aa9fb2c61feb2f9b94d04b201.jpeg',
      image2: '/6fe0dacbca69947a57245680f5a2cde5.jpeg',
      likes: 10,
      comments: 'Sit in pertinax petentium est ne mucius',
      name: 'Ence iif',
    },
    {
      user: 'jane_smith',
      image: '/4a220b10c6eb2504b61ed8011796dd40.jpeg',
      image2: '/62435966124777952d00c13011fae685.jpeg',
      likes: 26,
      comments: 'Mei ne audire fabulas ea mea quas putent',
      name: 'Rinna noor',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-4">
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 px-4">
        <div className="w-full md:w-[90%] max-w-6xl mx-auto py-10">
          <div className="text-center mb-10 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-gray-800">
              User Testimonials
            </h1>
            <Image
              width={80}
              height={8}
              src="/991cd436d30a9b81275808fbae79e10e.png"
              alt="Decoration"
              className="mx-auto"
              priority
            />
            <article className="text-center flex flex-col justify-center items-center mt-10 pt-10 md:my-5 w-full md:w-[770px] h-auto md:h-[48px]">
              <p className="text-sm mb-2">Mei ne audire fabulas. Ea mea quas</p>
              <p className="text-sm flex justify-center">
                {' '}
                putent, sit an lucilius <h3 className="font-bold px-1">repudiandae</h3>, mei ut{' '}
              </p>
              <p className="text-sm flex justify-center"> appetere electram maluisset. </p>
            </article>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-md hover:shadow-xl rounded-lg p-6 flex flex-col items-center transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2 py-4 text-sky-600">{card.title}</h3>
                  <Image
                    src={card.image}
                    loading="lazy"
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover mx-auto mb-4 rounded-full border-4 border-gray-200"
                    alt={card.title}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center my-10">
            <div className="w-full border-t border-gray-300"></div>
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-6xl mx-auto py-10">
        {/* Header */}
        <header className="text-center mb-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 tracking-wide text-gray-800">
            Recommended Reading
          </h1>
          <Image
            width={80}
            height={8}
            src="/991cd436d30a9b81275808fbae79e10e.png"
            alt="Decoration"
            className="mx-auto"
            priority
          />
        </header>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            // شاشة صغيرة (أقل من 768px): عرض بطاقة واحدة فقط
            0: {
              slidesPerView: 1,
            },
            // شاشة كبيرة (768px فما فوق): عرض بطاقتين
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {instagramCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-md hover:shadow-xl rounded-lg p-6 flex flex-col transition-shadow duration-300">
                {/* User Info */}
                <div className="w-full flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="ml-4 font-semibold text-gray-800">{card.user}</span>
                  </div>
                  <span className="text-gray-400">{card.likes}</span>
                </div>

                {/* Comments */}
                <div className="flex justify-start items-start m-3">
                  <h1 className="flex justify-start items-start">{card.comments}</h1>
                </div>

                {/* Main Image */}
                <Image
                  src={card.image}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                  alt={card.user}
                />

                {/* Footer */}
                <div className="w-full mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      src={card.image2}
                      loading="lazy"
                      width={100}
                      height={100}
                      className="w-12 h-12 object-cover mx-auto mb-4 rounded-full border-4 border-gray-200"
                      alt={card.title}
                    />
                    <div className="flex flex-col justify-start items-start mx-4">
                      <h3 className="font-bold justify-start">
                        Posted by : <span>{card.name}</span>
                      </h3>
                      <p className="text-start">29 Des 2018</p>
                    </div>
                  </div>
                  <span className="text-gray-600 text-center">Read more</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimoni;
