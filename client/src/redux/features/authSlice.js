import { createSlice } from "@reduxjs/toolkit";

const loginValue = localStorage.getItem("login");

const initialState = {
  isLogin: loginValue ? loginValue : false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true;
        }, 
        logout: (state) => {
            state.isLogin = false;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

