import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { modalThunk, openHandler } from "../store/modalSlice";
import { deleteItem } from "../store/todoSlice";

const Item = ({ email, password, id }) => {
  const dispatch = useDispatch();

  const openModalHandler = async () => {
    const openData = await dispatch(modalThunk(id));
    dispatch(openHandler(openData));
  };

  const deleteClickHandler = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <Li>
        <h1 onClick={openModalHandler}>{email}</h1>
        <h2>{password}</h2>
        <button onClick={() => deleteClickHandler(id)}>delete</button>
      </Li>
      <Modal />
    </>
  );
};

const Li = styled.li`
  list-style: none;
  background-color: aqua;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 600px;
  justify-content: space-between;
  gap: 20px;
  transition: 0.3s;
  &:hover {
    box-shadow: 5px 5px 10px #23c7c7;
  }
  border-radius: 10px;

  & button {
    padding: 5px;
    font-weight: 600;
    color: white;
    border: none;
    background-color: orange;
    border-radius: 10px;
    font-size: 20px;
  }
`;

export default Item;
