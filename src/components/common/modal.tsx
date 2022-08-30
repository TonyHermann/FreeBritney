import React, { FunctionComponent } from "react";

interface ModalProps {
  estadoModal: any;
  children: React.ReactNode;
  type: string;
  header: boolean;
  headerContent?: string;
  info?: boolean;
}

const Modal: FunctionComponent<ModalProps> = ({ header, headerContent, estadoModal, children, type, info }) => {
  return (
    <>
      {estadoModal ? (
        <div className={"overlay animate__animated animate__fadeIn"}>
          <div className={info ? "modal animate__animated animate__fadeInDown info": "modal animate__animated animate__fadeInDown"}>
            {header ? <div className="modal_header">
                {headerContent}
            </div> : ""}
            <div className="modal_body">
              <div className="idcontainer"></div>
              {children}
            </div>
            
          </div>
          
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
