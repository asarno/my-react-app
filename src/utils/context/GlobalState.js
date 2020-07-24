import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import { Api } from '../api'

const api = Api();

const initialState = {
    items: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function getItems() {
        const res = await api.get({
            url: "https://reqres.in/api/users?page=2"
          });

        dispatch({
            type: "GET_ITEMS_SUCCESS",
            payload: res.body.data
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                items: state.items,
                getItems,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};