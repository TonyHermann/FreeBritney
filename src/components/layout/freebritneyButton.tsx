import { FunctionComponent, useEffect, useState } from "react";
import { reto } from "../../models";
import { getRetosFromGH } from "../../services";
import Modal from "../common/modal";

interface FreeBritneyButtonProps {}

const FreeBritneyButton: FunctionComponent<FreeBritneyButtonProps> = () => {
  const [retos, setRetos] = useState<reto[]>([]);
  const [randReto, setRandReto] = useState<any>();
  const [estadoModal, cambiarEstadoModal] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getRetos();
  }, []);

  let handleClick = () => {
    setRandReto(getRandomReto());
    cambiarEstadoModal(true);
    setLoaded(true);
    console.log(randReto);
  };

  let getRetos = async () => {
    const retos = await getRetosFromGH();
    setRetos(retos);
  };

  let getRandomReto = () => {
    let rand = Math.floor(Math.random() * retos.length);
    return retos[rand];
  };

  return (
    <>
      <div
        className="fbButton"
        onClick={() => {
          handleClick();
        }}
      >
        <h1>#FreeBritney</h1>
      </div>
      <Modal estadoModal={estadoModal}>
        <div
          className="button closeButton"
          onClick={() => {
            cambiarEstadoModal(!estadoModal);
          }}
        >
          <p>X</p>
        </div>
        {loaded ? (
          <div className="retoContent">
            <div className="reto" id={randReto.id} key={randReto.id}>
              <div className="header">
                <p>Reto #{randReto.id}</p>
              </div>
              <div className="body">
                <p>Avanzas un casillero si...</p>
                <div className="content">
                  <div className="reto_texto">
                    <p>{randReto.contenido}</p>
                  </div>
                  {randReto.rta ? (
                    <div className="rta">
                      <p>{randReto.rta}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="finishButton">
                <p>Completado!</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};

export default FreeBritneyButton;
