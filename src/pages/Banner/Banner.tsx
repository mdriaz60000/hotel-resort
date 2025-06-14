

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import a from "./../../assets/a.jpg";
import b from "./../../assets/b.jpg";
import e from "./../../assets/e.jpg";
import { Link } from "react-router-dom";


const Banner = () => {


  const slides = [
    {
      image: a,
      title: "Luxury Redefined",
      subtitle: "Experience unparalleled comfort in our premium suites",
      cta: "Explore Rooms",
      link: "/rooms",
    },
    {
      image: b,
      title: "Tropical Paradise",
      subtitle: "Your dream vacation starts here",
      cta: "View Packages",
      link: "/packages",
    },
    {
      image: e,
      title: "Exquisite Dining",
      subtitle: "Savor world-class cuisine with breathtaking views",
      cta: "Discover Menus",
      link: "/dining",
    },
  ];

  return (
    <div className="relative w-full ">
      <Carousel
       
        className="w-full h-full"
    
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div className="absolute inset-0 bg-black/30 z-10" />
              <img
                src={slide.image}
                alt="banner"
                className="w-full h-120 object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
                <div className="max-w-3xl space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="mt-6 text-lg px-8 py-6 hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link to={slide.link}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 opacity-80 hover:opacity-100 transition-opacity" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 opacity-80 hover:opacity-100 transition-opacity" />
      </Carousel>

      {/* Overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 " />
    </div>
  );
};

export default Banner;