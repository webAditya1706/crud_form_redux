import { UserData } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UpdateUser, deleteUser, userData } from "../reducers/formReducer";

const createUserAction = createAsyncThunk(
  "form/createUser",
  async (body: UserData, thunkApi) => {
    thunkApi.dispatch(userData(body));
  }
);

const delateUserAction = createAsyncThunk(
  "form/delateUserAction",
  async (id: number, thunkApi) => {
    thunkApi.dispatch(deleteUser(id));
  }
);
const updateUserAction = createAsyncThunk(
  "form/delateUserAction",
  async ({ data, id }: { data: UserData; id: number }, thunkApi) => {
    thunkApi.dispatch(UpdateUser({ data, id }));
  }
);

export { createUserAction, delateUserAction, updateUserAction };
