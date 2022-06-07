import React from 'react'
import { useSelector } from 'react-redux'
import { requestApiData } from './Redux/Actions/actions';

export const Home = () => {

  requestApiData();

  

  const data = useSelector(state => state.data);

  console.log("Data" ,data);

  return (
    <div>{data}</div>
  )
}
