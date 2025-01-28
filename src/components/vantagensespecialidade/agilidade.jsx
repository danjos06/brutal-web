import { useEffect, useState } from "react";
import tensao3 from '../../assets/tensao3.png';

function Agilidade() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
        <h2 className="text-3xl flex"><img className="h-[2.25rem] mr-3" src={tensao3} alt="" />AGILIDADE | PREPARAR PARA A PRÓXIMA</h2>
        <div className={`transition-all duration-300 ${isHovered ? "text-3xl bg-black/70 p-5 rounded-2xl my-3 shadow-black shadow-md" : "text-2xl py-3"}`}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        // onClick={()=> isHovered ? setIsHovered(false) : setIsHovered(true)}
        >
          {isHovered ? (
            <p>Gaste<span className="inline-flex"><img className="h-[2.25rem] ml-3 mr-2" src={tensao3} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Pontos de Tensão</p></span>para garantir um Dado de Fuga extra no próximo teste de Vazar Dali que você realizar. Essa vantagem só pode ser usada uma vez a cada encontro.</p>
          ):(
            <p>Gaste<span className="inline-flex"><img className="h-[2rem] ml-3 mr-2" src={tensao3} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Tensão</p></span>para ganhar um dado de fuga garantido. (Uma vez por encontro)</p>
          )}
        </div>
        </>
    )
}

export default Agilidade;