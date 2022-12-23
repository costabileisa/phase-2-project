import React, { useState } from "react";

const EnergyContext = React.createContext();

function EnergyProvider({ children }) {
    const [energy, setEnergy] = useState("-")
    return (
        <EnergyContext.Provider value={{energy, setEnergy}}>
            {children}
        </EnergyContext.Provider>
    )
}

export { EnergyContext, EnergyProvider };