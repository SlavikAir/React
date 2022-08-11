import {useDispatch, useSelector} from 'react-redux';

function Test() {

  const dispatch = useDispatch() // получаем диспатч в кампоненте при помощи хука
  const cash = useSelector(state => state.cash.cash)    // получаем при помощи useSelector то что хоронится в стейте в ячейке cash
  console.log(cash);

  const addCash = ()=> {
    dispatch( { type: "ADD_CASH", payload: 1})     // создаем функцию акшен которая меняет стейт
  }
  const getCash = (cash)=> {
    dispatch( { type: "GET_CASH", payload: 1})
  }


  return (
    <div className="App">
        <h1 style={{fontSize:"30px"}}>{cash}</h1>
        <button onClick={()=> addCash()}>add</button>
        <button onClick={()=> getCash()}>get</button>

    </div>
  );
}

export default Test;
