const INITIAL_STATE = {
    id: null,
    username:'',
    password:'',
    role: ''
}

export const authReducer=(state = INITIAL_STATE, action)=>{
    switch(action.type){
        case  'LOGIN_SUCCESS' : 
        console.log('Data masuk reducer dari loginAction:', action)
        //return data yang didapat dari action
        return {...state, ...action.payload}
        default:
            return state
    }
}