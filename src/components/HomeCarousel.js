import React from "react";
import HoverCarousel from "hover-carousel";

const HomeCarousel = () => {
  const images = [
    "https://m.media-amazon.com/images/S/pv-target-images/bbf6bf4d7c338c0c85904685bec4caafb789d987bc2c07bf5d88d3f8153f03b1._UR1920,1080_SX480_FMwebp_.jpg",
    "https://m.media-amazon.com/images/S/pv-target-images/e3fc493c11fa32536749b6215baab99baa8cb51049caef37820be73d8ff5e636._UR1920,1080_SX480_FMwebp_.jpg",
    "https://m.media-amazon.com/images/S/pv-target-images/4149d6eb41ae0f4bb16708d46b022fc20189cf975bbea9aa62cc6d20a68d1c45._UR1920,1080_SX480_FMwebp_.jpg",
    "https://m.media-amazon.com/images/S/pv-target-images/1bb9bb15f63f35c44f31ab996012693b02d065825b175c905df918dbf18310d4._UR1920,1080_SX480_FMwebp_.jpg",
    "https://m.media-amazon.com/images/S/pv-target-images/473ed7b4b47bdd60a13ce6f612d2e38784f38a271bb9cf1f15a58bb5dd5845bd._UR1920,1080_SX480_FMwebp_.jpg",
    "https://m.media-amazon.com/images/S/pv-target-images/cebe7a72e01d004b6638885f2b22a40fe5ca4fd577e01b9cf2bc577fbe0fa8e7._UR1920,1080_SX480_FMwebp_.jpg",
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default HomeCarousel;
