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
        <div className="retoContent">
          <p>Avanzas un casillero si...</p>
          {loaded ? <p>{randReto.contenido}</p> : ""}
        </div>
      </Modal>
    </>
  );
};

export default FreeBritneyButton;
