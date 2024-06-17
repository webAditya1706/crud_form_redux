"use client";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
      <ToastContainer theme="light" />
    </>
  );
};

export default ClientProvider;
