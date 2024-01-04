import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postItem } from "../store/todoSlice";
const AddNewPost = () => {
  const dispatch = useDispatch();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const dataItem = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    };
    dispatch(postItem(dataItem));
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <div>
        <input type="email" ref={inputEmailRef} placeholder="email" />
        <input type="password" ref={inputPasswordRef} placeholder="password" />
        <button>ADD</button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & div {
    background-color: aqua;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    transition: 0.3s;
    &:hover {
      box-shadow: 5px 5px 10px #23c7c7;
    }
  }

  & input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: grey;
    background-color: aqua;
    outline: none;
    color: grey;
    font-size: 20px;
  }
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

export default AddNewPost;
