import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeHandler } from "../store/modalSlice";

const Modal = () => {
  const { isOpen, data } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  if (!isOpen) {
    return null;
  }

  const closeModalHandler = () => {
    dispatch(closeHandler());
  };

  return ReactDOM.createPortal(
    <ModalBacground>
      <ModalContent>
        <div className="content"></div>
        <h1>{data.payload.email}</h1>
        <h2>{data.payload.password}</h2>
        <button onClick={closeModalHandler}>close</button>
      </ModalContent>
    </ModalBacground>,
    document.getElementById("modal")
  );
};

const ModalBacground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 7.7% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 23%;
  border-radius: 20px;

  & img {
    width: 300px;
    height: 300px;
  }
  & div {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  & button {
    margin-top: 10px;
    padding: 10px 20px;
    color: white;
    background-color: orange;
    font-weight: 600;
    font-size: 20px;
    border: none;
    border-radius: 10px;
  }
`;

export default Modal;
