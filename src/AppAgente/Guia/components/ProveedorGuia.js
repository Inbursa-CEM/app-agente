import { createContext } from "react";

export const ContextoGuia = createContext();

const ProveedorGuia = ({children}) => {

    return (
        <ContextoGuia.Provider value={[]}>
            {children}
        </ContextoGuia.Provider>
    )

};


export default ProveedorGuia;