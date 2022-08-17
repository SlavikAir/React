
const defaultState = {
    customer: []
  }



const customerReducer = (state = defaultState, action)=> {   
    switch(action.type) {               
        case "ADD_CUSTOMER":
          return {...state, customer: [...state.customer, action.payload]} // разворачиваем в кастомере кастомер из стейта и в конец дабовляем значение

        case "REMOVE_CUSTOMER":                         
        return {...state, cash: state.cash - action.payload}

      default :
        return state                   
    }
  }

export default customerReducer
  