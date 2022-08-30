import { FunctionComponent, useState } from "react";
import Modal from "../common/modal";

interface HelpButtonProps {}

const HelpButton: FunctionComponent<HelpButtonProps> = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  return (
    <>
      <div
        className="button helpButton"
        onClick={() => {
          cambiarEstadoModal(!estadoModal);
        }}
      >
        <p>
          <i className="fa fa-info" aria-hidden="true"></i>
        </p>
      </div>
      <Modal estadoModal={estadoModal} type="info" header info headerContent="Ayuda">
        <div className="help_container">
          <div
            className="button closeButton"
            onClick={() => {
              cambiarEstadoModal(!estadoModal);
            }}
          >
            <p>X</p>
          </div>
          <div className="content">
            <h2>Bienvenido a #FreeBritney</h2>
            <h3>¿Cómo jugar?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum minima nihil reprehenderit aspernatur
              dolore, enim quod illum perferendis veritatis saepe eligendi pariatur, nulla reiciendis optio distinctio
              inventore, doloremque aperiam ipsa.
            </p>
          </div>
          <div className="footer">
          <p>
            Developed with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/tony-hermann/" target={"_blank"}>
              @TonyHermann
            </a>
          </p>
        </div>
        </div>
      </Modal>
    </>
  );
};

export default HelpButton;
