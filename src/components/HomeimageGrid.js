import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function HomeimageGrid() {
  return (
    <ImageList
      sx={{ width: 650, height: 480, overflow: "unset" }}
      cols={3}
      rowHeight={165}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg",
    title: "Lionsgate Play",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg",
    title: "Discovery",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg",
    title: "erosNow",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg",
    title: "max",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg",
    title: "hoichoi",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png",
    title: "vrott",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png",
    title: "amc",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg",
    title: "docubay",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg",
    title: "mubi",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/iWonder.png",
    title: "iwonder",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png",
    title: "stringray",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/426x294_CuriosityStream.png",
    title: "curious",
  },
];
