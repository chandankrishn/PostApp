import { RECEIVE_API_DATA } from "../Actions/actions";

export default (state = {}, { type, data }) => 
{
  switch (type) 
  {
    case RECEIVE_API_DATA:
      console.log("redievd data",data);
      return data;
    default:
      console.log("error",data);
      return state;
  }

};
