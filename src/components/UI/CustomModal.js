import React from "react";
import ReactDOM from "react-dom";
import "./CustomModal.css";

const CustomModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="modal-backdrop">
          <div className="modal-custom">
            <header>
              <h1>{props.title}</h1>
            </header>
            <div className="modal-body">
                {props.children}
            </div>
            <footer>
              <button onClick={props.closeModal}>Close</button>
            </footer>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default CustomModal;
