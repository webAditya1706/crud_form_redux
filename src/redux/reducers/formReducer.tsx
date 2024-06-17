import { UserData } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  userData: UserData[];
}

const initialState: UserState = {
  userData: [],
};

const createuserSlice = createSlice({
  name: "create/user",
  initialState: initialState,
  reducers: {
    userData: (state, action: PayloadAction<UserData>) => {
      state.userData = [...state.userData, action.payload];
    },
    deleteUser: (state, action) => {
      let updatedData = JSON.parse(JSON.stringify(state.userData)).filter(
        (_: UserData, index: number) => index != action.payload
      );
      state.userData = updatedData;
    },
    UpdateUser: (state, action) => {
      let updatedData = JSON.parse(JSON.stringify(state.userData)).map(
        (item: UserData, index: number) =>
          index === action.payload.id ? action.payload.data : item
      );
      state.userData = updatedData;
    },
  },
});

export const { userData, deleteUser, UpdateUser } = createuserSlice.actions;

export default createuserSlice.reducer;
