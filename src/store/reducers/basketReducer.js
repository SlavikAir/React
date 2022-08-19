

const basketReducer = (state = {}, {type, good}) => {  // action = { type, good, count = 1}
    switch (type) {
        case "ADD_BASKET":
            return { ...state, [good.id]: good }

        case "DELETE":
            let { [good.id]: remove, ...newState } = state;  // создаем обьекты которые создаются при разборе всего стейта
            return newState;                                 // передаю в экшене товар. из него берется id и слот из state с id такимже 
                                                            // переносится в переменную remove, все остальное отходит в newState
        case "CLEAN":
            return {}

        default:
            return state

    }
}

export default basketReducer;