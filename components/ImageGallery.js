import ReactImageGallery from "react-image-gallery";
import Carousel from "react-bootstrap/Carousel";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description: "blablal",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description: "blablal",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description: "blablal",
  },
];
export default function ImageGallery() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="imgGallery-photo"
          src="https://www.digi-art.pl/userdata/gfx/5051.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgGallery-photo"
          src="https://d32dm0rphc51dk.cloudfront.net/ITroKwWUgrsFlax-zrHhBQ/large.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgGallery-photo"
          src="https://media.architecturaldigest.com/photos/605a2c39261ed921906092cf/3:2/w_2530,h_1686,c_limit/basquiat.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
