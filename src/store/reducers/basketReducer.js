


const basketReducer = ( state={}, action) => {  // action = { type, good, count = 1}
    switch (action.type) {
        case "ADD_BASKET" :
            return { ...state, [Math.random() *100]: action.good}
            
        case "DELETE" :
            return {}

        case "CLEAN" :
            return {}

        default :
            return {state }                  
        
    }
}

export default basketReducer;