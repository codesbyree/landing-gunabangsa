import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"

const carouselImageUrls = [
  "/assets/images/hero-carousel/slide - 1.webp",
  "/assets/images/hero-carousel/slide - 2.webp",
  "/assets/images/hero-carousel/slide - 3.webp",
  "/assets/images/hero-carousel/slide - 4.webp",
]

export default function CarouselImage() {
  return (
    <Carousel
      className="absolute top-0 left-0 h-dvh w-full"
      plugins={[Autoplay({ delay: 5000 }), Fade()]}
    >
      <CarouselContent className="bg-blue-600">
        {carouselImageUrls.map((url, index) => (
          <CarouselItem key={index} className="h-full w-full bg-blue-200">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="h-dvh w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
