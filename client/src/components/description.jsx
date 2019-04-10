import React from "react";
import ReactDOM from "react-dom";
import ModalDescription from "./Modal.description.jsx";
import SizeButton from "./SizeButton.jsx";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "white",
      colour: "black"
    };
  }
  clicked() {
    this.setState({ colour: "white", background: "black" });
  }

  render() {
    return (
      <div className="describe">
        <div>Select Size</div>
        <div className="size">
          {this.props.size.map(data => (
            <SizeButton
              data={data}
              bgcolor={this.state.background}
              color={this.state.colour}
              clickedButton={this.clicked.bind(this)}
            />
          ))}
        </div>
        <div className="shopping-buttons">
          <button className="add-cart">Add to Cart</button>
          <button className="heart">&lt;3</button>
        </div>

        <p>{this.props.describes.description}</p>
        <ul>
          <li>Shown: {this.props.describes.shown}</li>
          <li>Style: {this.props.describes.style}</li>
        </ul>
        <p />
        <div>
          <ModalDescription info={this.props.describes} />
        </div>
      </div>
    );
  }
}

export default Description;
