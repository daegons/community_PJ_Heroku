import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "",
    uid: "",
    //firebase
    accessToken: "",
    photoURL: "",
    isLoading: false,
  },
  reducers: {
    //로그인시에 데이터
    loginUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.photoURL = action.payload.photoURL;
      state.isLoading = true;
    },
    //user 로그아웃시에 값 비워줌
    clearUser: (state) => {
      state.displayName = "";
      state.uid = "";
      state.accessToken = "";
      state.isLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
