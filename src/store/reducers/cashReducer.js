
const defaultState = {
    cash:0,
  }
  


const cashReducer = (state = defaultState, action)=> {   // принемаем стейт и актион
    switch(action.type) {               // прописуем условие что при  type:  таком делаем тото
        case "ADD_CASH":
          return {...state, cash: state.cash + action.payload} // {} создаем новый обьект в нем разворачиваеи state
                                                              // ...state и меняем поле cash. берем старое значении stat.cash
                                                              // и добовляем к нему то значение которое пришло к нам в action.payload
        case "GET_CASH":                         
        return {...state, cash: state.cash - action.payload}
      default :
        return state                    // возвращаем стейт
    }
  }

export default cashReducer