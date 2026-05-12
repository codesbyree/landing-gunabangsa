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
      className="h-dvh w-full"
      plugins={[Autoplay({ delay: 5000 }), Fade()]}
    >
      <CarouselContent>
        {carouselImageUrls.map((url, index) => (
          <CarouselItem key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
