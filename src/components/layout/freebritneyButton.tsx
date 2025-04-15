import { FunctionComponent, useEffect, useState } from "react";
import { reto } from "../../models";
import { getRetosFromGH } from "../../services";
import Modal from "../common/modal";

interface FreeBritneyButtonProps {}

const FreeBritneyButton: FunctionComponent<FreeBritneyButtonProps> = () => {
  const [retos, setRetos] = useState<reto[]>([]);
  const [randReto, setRandReto] = useState<reto>();
  let [completedList, setCompletedList] = useState<reto[]>([]);
  const [estadoModal, cambiarEstadoModal] = useState<boolean>(false);
  const [estadoModal2, cambiarEstadoModal2] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  let [audioName, setAudioName] = useState<number>(1);
  let audio = new Audio(`./audio/${audioName}.mp3`);

  useEffect(() => {
    initApp();
    getRetos();
    getCompleted();
  
  }, []);

  let initApp = () => {
    if(!localStorage.getItem("completedList")) {
      localStorage.setItem("completedList", JSON.stringify([{'id': '0'}]));
    }
  }

  let handleClick = () => {
    let randReto = getRandomReto();
    if(typeof randReto != 'boolean') {
      setRandReto(randReto);
      cambiarEstadoModal(true);
      setLoaded(true);
    } else {
      // setFinish(true);
      cambiarEstadoModal2(true);
      setLoaded(false);
    }
    setAudioName(getRandomNumber(35));
    audio.play();
  
  };

  let getRetos = async () => {
    const retos = await getRetosFromGH();
    setRetos(retos);
  };

  let getRandomReto = (): reto | boolean => {
    let rand = getRandomNumberFromArray(retos);
    do {
      rand = getRandomNumberFromArray(retos);
      if (retos.length == completedList?.length) {
        break;
      }
    } while (completedList?.find((elem) => elem.id === retos[rand].id));

    if (!completedList?.find((elem) => elem.id === retos[rand].id)) {
      return retos[rand];
    } else {
      return false
    }

  };

  let getRandomNumberFromArray = (array: Array<reto>): number => {
    let rand = Math.floor(Math.random() * array.length);
    return rand;
  };

  let getRandomNumber= (total:number): number => {
    let rand = Math.floor(Math.random() * total);
    return rand;
  };

  let handleComplete = () => {
    cambiarEstadoModal(!estadoModal);
    if(randReto != undefined) {
      setNewRetoCompleted(randReto);
    }
  };

  let setNewRetoCompleted = (reto: reto) => {
    setCompletedList((prev) => [...(prev || []), reto]);
    localStorage.setItem("completedList", JSON.stringify(completedList));
  };

  let getCompleted = () => {
    let x = localStorage.getItem("completedList");
    setCompletedList(JSON.parse(x || '[]'));
  };

  let handleReset = () => {
    localStorage.setItem("completedList", JSON.stringify([{}]));
    location.reload();
  }

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
        {(loaded && typeof randReto != 'undefined') ? (
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
                      <span>Rta:</span><p>{randReto.rta}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div
                className="finishButton"
                onClick={() => {
                  handleComplete();
                }}
              >
                <p>Completado!</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Modal>
      <Modal estadoModal={estadoModal2}>
        <div className="finishModal">
        <p>No quedan más retos!</p>
        <div className="button" onClick={() => {
          handleReset();
        }}>
          <p>Reiniciar juego (la lista de retos completados será reiniciada)</p>
        </div>
        <div className="button" onClick={() => {
          cambiarEstadoModal2(false);
        }}>
          <p>Cerrar</p>
        </div>
        </div>
      </Modal>
    </>
  );
};

export default FreeBritneyButton;
