const initialState = {
    isLogged:false,
    data:""
}

const loggedReducer = (state = initialState , action)=>{
    switch (action.type) {
        case 'SIGN_IN':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}

export default loggedReducer