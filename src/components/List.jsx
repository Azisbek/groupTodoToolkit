import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '../store/todoSlice'
import Item from './Item'


const List = () => {
    const dispatch = useDispatch()
    const {baseData} = useSelector(state => state.todo)
    console.log(baseData);

    useEffect(()=>{
        dispatch(getItem())
    }, [dispatch])
    
  return (
    <div>
      {baseData.map((todo)=>{
        return <Item email = {todo.email} password = {todo.password}/>
      })}
    </div>
  )
}

export default List
