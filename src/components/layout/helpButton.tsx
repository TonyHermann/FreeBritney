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
            Jugando solo o en equipo, elegí si querés ser #TeamBritney o #TeamSpears en la batalla legal por la tutela de la cantante. Por turnos, cada equipo va a apretar el botón #FreeBritney para darle un desafío al equipo contrario. Si  los desafíos de la B-Army son cumplidos el equipo puede avanzar de casillero para así estar más cerca de ganar el juicio legal. La habitación de Britney y el gran escenario cuentan como dos casilleros. 
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
