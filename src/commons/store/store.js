import { configureStore, createSlice } from "@reduxjs/toolkit";

// state와 비슷
const isLogin = createSlice({
    name : 'isLogin',
    initialState : false,

    reducers : {
        // isLogin을 수정하는 함수 
        setIsLoginTrue() {
            return true
        },
        setIsLoginFalse() {
            return false
        }
    }
})

// 수정 함수 export
export const { setIsLoginTrue, setIsLoginFalse } = isLogin.actions

// store : state를 보관
export default configureStore({
    reducer: {
        isLogin : isLogin.reducer
    }
})