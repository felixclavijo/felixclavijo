const initialState = {
    admin: null,
    prevAdmin: null,
    onlineAdmin: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADMIN":
            return {
                ...state,
                admin: action.item,
            };

        case "PREVADMIN":
            return {
                ...state,
                prevAdmin: action.item,
            };

        case "ONLINEADMIN":
            return {
                ...state,
                onlineAdmin: action.item,
            };

        default:
            return state;
    }
};

export default rootReducer;
