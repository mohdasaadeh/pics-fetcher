import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", (event) => {
      const span = Math.ceil(event.path[0].clientHeight / 10);

      this.setState({ span });
    });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <img
        style={{ gridRowEnd: `span ${this.state.span}` }}
        ref={this.imageRef}
        alt={description}
        src={urls.regular}
      />
    );
  }
}

export default ImageCard;
