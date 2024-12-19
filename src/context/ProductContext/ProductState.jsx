import { createContext, useReducer } from 'react';
import ProductReducer from "./ProductReducer"
import axios from "axios"


const initialState = {
  products: [],
};


export const ProductContext  = createContext(initialState);

export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/character");
        dispatch({
          type: "GET_PRODUCTS",
          payload: res.data.results,
        });
      };
    
    
    return (
        <ProductContext.Provider
          value={{
            products: state.products,
            getProducts,
          }}
        >
          {children}
        </ProductContext.Provider>
      );
    };

