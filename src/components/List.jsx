import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/todoSlice";
import Item from "./Item";
import styled from "styled-components";

const List = () => {
  const dispatch = useDispatch();
  const { baseData } = useSelector((state) => state.todo);
  console.log(baseData);

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  return (
    <ListStyle>
      {baseData.map((todo) => {
        return (
          <Item email={todo.email} password={todo.password} id={todo.id} />
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  color: gray;
  flex-direction: column;
`;

export default List;
