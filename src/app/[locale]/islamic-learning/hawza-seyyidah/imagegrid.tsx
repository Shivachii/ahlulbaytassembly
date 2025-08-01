import Image from "next/image";

export default function ImageGrid() {
  const images = [
    { src: "/hawza/g1.jpg", alt: "Event 1" },
    { src: "/hawza/g2.jpg", alt: "Event 2" },
    { src: "/hawza/g4.jpg", alt: "Event 3" },
    { src: "/hawza/g3.jpg", alt: "Event 4" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 mx-auto">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative w-auto h-auto rounded-lg overflow-hidden "
        >
          <Image
            src={img.src}
            alt={img.alt || `Image ${index + 1}`}
            width={300}
            height={300}
            className="object-center object-cover w-full h-40 md:h-48 "
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 200px"
          />
        </div>
      ))}
    </div>
  );
}
