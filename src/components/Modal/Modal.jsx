import { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const placeModal = document.getElementById("modal-root");

class Modal extends Component {
  render() {
    const { onClose, children } = this.props;
    return createPortal(
      <div className={styles.backdrop}>
        <div className={styles.content}>
          <button onClick={() => onClose()} type="button">
            X
          </button>
          {children}
        </div>
      </div>,
      placeModal
    );
  }
}

export default Modal;
