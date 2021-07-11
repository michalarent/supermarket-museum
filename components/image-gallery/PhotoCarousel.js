import ImageGallery from "react-image-gallery";
import dynamic from "next/dynamic";

export default function PhotoCarousel({ images }) {
  const ImageGallery = dynamic(
    () => import("react-image-gallery"),
    {
      ssr: false,
    }
  );
  return <ImageGallery items={images} />;
}
