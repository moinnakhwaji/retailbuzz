import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

const Slider = () => {
  const swiperRef = useRef(null); 

  const slides = [
    {
      title: "Fast Billing & Inventory Smart Reports",
      content:
        "Streamline your billing and inventory with real-time updates and smart reports for fast and efficient management.",
      img: "https://www.gofrugal.com/sites/gweb/files/gofrugal/images/features-pages/billing_features/feat_img1.png",
    },
    {
      title: "Retail POS Software",
      content:
        "Our Retail POS Software is designed to increase your sales with powerful tools for retail points, stock management, and customer service.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXGImUWJKNs29eKrBO5ap_THX13QHSVNlZg&s",
      buttonText: "View More",
    },
    {
      title: "Stock Distribution Software",
      content:
        "Designed for optimal stock management, our Stock Distribution Software ensures smooth operations across multiple stores.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeCQdT--yBsxeETmiCjrEkv-9Tz5_RwDApQ&s",
    },
  ];

  // Function to handle the slide change on button click
  const handleNextSlide = () => {
    swiperRef.current.swiper.slideNext(); // Go to next slide
  };

  return (
    <section className="py-12 bg-black text-white px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
  Smart Solutions
</h2>

        </div>

        {/* Slider */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1} // Show 1 slide at a time
          spaceBetween={30} // Add space between slides
          navigation={false} // Disable navigation arrows
          loop={false} // Disable looping
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-between w-full bg-gray-800 shadow-lg rounded-lg p-8 hover:scale-105 transition-transform duration-300">
                {/* Left side (Text Content) */}
                <div className="w-1/2 pr-8">
                  <h3 className="text-3xl font-semibold text-white mb-4">{slide.title}</h3>
                  <p className="text-lg text-gray-400 mb-4">{slide.content}</p>
                  {slide.buttonText && (
                    <button
                      onClick={handleNextSlide}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    >
                      {slide.buttonText}
                    </button>
                  )}
                </div>

                {/* Right side (Image Section) */}
                <div className="w-1/2">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
