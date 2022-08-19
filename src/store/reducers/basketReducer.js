

const basketReducer = (state = {}, {type, good}) => {  // action = { type, good, count = 1}
    switch (type) {
        case "ADD_BASKET":
            return { ...state, [good.id]: good }

        case "DELETE":
            let { [good.id]: remove, ...newState } = state;  
            return newState;                                 
                                                            
        case "CLEAN":
            return {}

        default:
            return state

    }
}

export default basketReducer;