import { FunctionComponent, useEffect, useState } from "react";
import { reto } from "../../models";
import { getRetosFromGH } from "../../services";
import Modal from "../common/modal";

interface FreeBritneyButtonProps {}

const FreeBritneyButton: FunctionComponent<FreeBritneyButtonProps> = () => {
  const [retos, setRetos] = useState<reto[]>([]);
  const [randReto, setRandReto] = useState<any>();
  const [estadoModal, cambiarEstadoModal] = useState<boolean>(false);
  const [estadoModal2, cambiarEstadoModal2] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  let [completedList, setCompletedList] = useState<reto[]>();
  const [finish, setFinish] = useState<boolean>(false);

  const audioList = ["boys no se q cosa", "Do you feel me now", "dont stop now just be the champion", "don't u know i still believe", "Give me a sign", "hit me baby one more time", "I can't wait", "I still believe still believe", "I Think i did it again", "I'm addicted to you dont u know that ur toxic", "Im not that innocent", "Ima slave", "Intoxicate me now", "lollipop", "My lonliness is killing me", "now they dont believe ya but they gonna need ya", "oh baby baby", "oops 1", "oops2", "show me how u wanna to be", "There's no scape", "Too high can't come down", "u say im crazy i got u crazy", "U wanna hot", "u wanta  bugatti", "With the taste of your lips im on a ride", "womanizer 1", "work it out", "work work work", "you better work bitch", "you got me go in", "you wanna live fancy", "You wanna", "you want a lamborghini", "You want a maseratti"];
  let [audioName, setAudioName] = useState<string>("");
  let audio = new Audio(`../audio/${audioName}.mp3`);


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
    if(randReto) {
      setRandReto(randReto);
      cambiarEstadoModal(true);
      setLoaded(true);
    } else {
      setFinish(true);
      cambiarEstadoModal2(true);
      setLoaded(false);
    }
    setAudioName(audioList[getRandomNumber(audioList)]);
    audio.play();
  
  };

  let getRetos = async () => {
    const retos = await getRetosFromGH();
    setRetos(retos);
  };

  let getRandomReto = () => {
    let rand = getRandomNumber(retos);
    console.log(completedList?.length);
    console.log(retos.length);
    do {
      rand = getRandomNumber(retos);
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

  let getRandomNumber = (array:Array<any>): number => {
    let rand = Math.floor(Math.random() * array.length);
    return rand;
  };

  let handleComplete = () => {
    cambiarEstadoModal(!estadoModal);
    console.log(completedList);
    setNewRetoCompleted(randReto);
    console.log(typeof completedList);
  };

  let setNewRetoCompleted = (reto: reto) => {
    completedList?.push(reto);
    localStorage.setItem("completedList", JSON.stringify(completedList));
  };

  let getCompleted = () => {
    let x = localStorage.getItem("completedList");
    setCompletedList(JSON.parse(x || '{}'));
  };

  let handleReset = () => {
    console.log('initializing');
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
