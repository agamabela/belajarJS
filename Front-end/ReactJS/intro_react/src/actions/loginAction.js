//action untuk mengarahkan data dari component ke reducer
export const authLogin = (data) =>{
    console.log('Data masuk action dari Component:', data)
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}