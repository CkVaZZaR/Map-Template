import React from "react";
import Modal from "../Modal/Modal";
import "./Analytics.css";

export default function Analytics(modal) {
  return (
    <Modal open={modal}>
      <h3>Hello from Modal!</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        debitis explicabo illo adipisci porro asperiores ratione, iusto
        doloribus voluptates ab amet totam reiciendis possimus molestias officia
        non vero molestiae quos.
      </p>
      <button className='analytics-btn' onClick={() => setModal(false)}>
        Close modal
      </button>
    </Modal>
  );
}
