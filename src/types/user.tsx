export interface UserData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RenderTableProps {
  storeValue: UserData[];
  setEditData: (data: UserData) => void;
  setEditDataById: (id: number) => void;
  startIndex:number;
}
