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

const isTrans = createSlice({
    name : 'isTrans',
    initialState : '이미지 전송 성공 초기값',

    reducers : {
        setIsTrans(state, action) {
            return action.payload
        }
    }
})

// 수정 함수 export
export const { setIsLoginTrue, setIsLoginFalse } = isLogin.actions
export const {setIsTrans} = isTrans.actions

// store : state를 보관
export default configureStore({
    reducer: {
        isLogin : isLogin.reducer,
        isTrans : isTrans.reducer
    }
})