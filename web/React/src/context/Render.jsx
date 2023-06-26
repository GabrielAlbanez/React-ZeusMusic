import React from "react";
import { createContext, useState, useEffect } from "react";

export const RenderContext = createContext();

export const RenderContextProvider = ({ children }) => {
  useEffect(() => {
    function colocarTamnho() {
      setTamanhoTela(window.innerWidth);
      window.addEventListener('resize', refrshPage);
    }

    function refrshPage() {
      window.location.reload();
    }

    window.addEventListener("resize", colocarTamnho);
    setTamanhoTela(window.innerWidth);

    return () => {
      window.removeEventListener("resize", colocarTamnho);
    };
  }, []);

  const [render, setRender] = useState(false);
  const [cardName, setCardname] = useState("");
  const [tamanhoTela, setTamanhoTela] = useState(0);

  return (
    <RenderContext.Provider value={{ render, setRender, cardName, setCardname, tamanhoTela, setTamanhoTela }}>
      {children}
    </RenderContext.Provider>
  );
};
