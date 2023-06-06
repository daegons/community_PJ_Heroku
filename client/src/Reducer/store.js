import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// userSlice 작업 후 아래 추가한 뒤에 useSelecter로 user정보 불러오기 가능
export default configureStore({
  reducer: {
    user: userSlice,
  },
  //redux-toolkit 비직렬화 데이터를 보내면 에러 발생 아래 코드로 에러 안뜨게 임시해결..
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
