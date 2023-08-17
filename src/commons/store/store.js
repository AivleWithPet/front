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

const initialState = {
    createdAt: "",
    diseaseName: "",
    imageBase64: "",
    inform: "",
    percentage: 0,
    supplements: ""
  };

const isTrans = createSlice({
    name : 'isTrans',
    initialState : initialState,

    reducers : {
        setIsTrans(state, action) {
            return action.payload
        }
    }
})

const isPetname = createSlice({
    name : 'isPetname',
    initialState : '강아지 이름',

    reducers : {
        setIsPetname(state, action) {
            return action.payload
        }
    }
})

// 수정 함수 export
export const { setIsLoginTrue, setIsLoginFalse } = isLogin.actions
export const {setIsTrans} = isTrans.actions
export const {setIsPetname} = isPetname.actions

// store : state를 보관
export default configureStore({
    reducer: {
        isLogin : isLogin.reducer,
        isTrans : isTrans.reducer,
        isPetname : isPetname.reducer
    }
})
