import React from "react";
import { RenderContext } from "../context/Render";
import { useContext } from "react";

const PrivilegiosAssinatura = ({ descricao, tempo, tempo2, privilegio1, privilegio1m, privilegio2, privilegio2m, privilegio3, privilegio3m, custo, custo2 }) => {


  const { tamanhoTela, setTamanhoTela } = useContext(RenderContext)





  return (
    <ol className="text-white pt-20 relative flex gap-10 flex-col  w-62 h-36 sm:pt-36 gap-5">
      <li className="w-24 sm:w-full">{tamanhoTela < 1200 ? "" : descricao}</li>
      <li className="w-24 sm:w-full"> {tamanhoTela < 1200 ? tempo2 : tempo}</li>
      <li className="w-24 sm:w-full"> {tamanhoTela < 1200 ? privilegio1m : privilegio1}</li>
      <li className="w-24 sm:w-full">{tamanhoTela < 1200 ? privilegio2m : privilegio2}</li>
      <li className="w-24 sm:w-full">{tamanhoTela < 1200 ? privilegio3m : privilegio3}</li>
      <li className="w-24 sm:w-full">{tamanhoTela < 1200 ? custo2 : custo}</li>
    </ol>
  )


}
export default PrivilegiosAssinatura;