import React from "react";
import Modal from "react-modal";

class ModalDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalstate: false
    };
  }

  toggle() {
    this.setState({
      modalstate: !this.state.modalstate
    });
  }

  render() {
    return (
      <div className="describe-body">
        <u onClick={this.toggle.bind(this)}>Read more</u>
        <Modal
          isOpen={this.state.modalstate}
          className="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
        >
          <div id="closeModal" onClick={this.toggle.bind(this)}>
            x
          </div>
          <div className="shoe-preview">
            <img
              src="https://c.static-nike.com/a/images/t_default/ccunkpxkr340tgmw8zzb/zoom-pegasus-turbo-mens-running-shoe-qCL9h1.jpg"
              width="50px"
              height="45px"
            />
            <div className="preview-description">
              <div>Nike Air eos quaerat temporibus</div>
              <div>$304</div>
            </div>
          </div>
          <div id="modal-body">
            <p>
              <b>{this.props.info.item_headline}</b>
            </p>
            <p>{this.props.info.description}</p>
            <h4>Benefits</h4>
            <ul>
              <li>{this.props.info.benefits}</li>
              <li>{this.props.info.benefits}</li>
            </ul>
            <h4>Product Details</h4>
            <ul>
              <li>{this.props.info.product_details}</li>
              <li>{this.props.info.product_details}</li>
              <li>{this.props.info.product_details}</li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalDescription;
