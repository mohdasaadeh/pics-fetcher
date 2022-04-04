import React from "react";
import "./ImagesBox.css";
import ImageCard from "./ImageCard";

class ImagesBox extends React.Component {
  render() {
    const images = this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />;
    });

    return <div className="images-box">{images}</div>;
  }
}

export default ImagesBox;
