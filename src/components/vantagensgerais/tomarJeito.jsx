import { useEffect, useState } from "react";
import tensao2 from '../../assets/tensao2.png'

function TomarJeito() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <h2 className="text-3xl flex"><img className="h-[2.25rem] mr-3" src={tensao2} alt="" />TOMAR JEITO</h2>
                    <div className={`transition-all duration-300 ${isHovered ? "text-3xl bg-black/70 p-5 rounded-2xl my-3 shadow-black shadow-md" : "text-2xl py-3"}`}
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                    // onClick={()=> isHovered ? setIsHovered(false) : setIsHovered(true)}
                    >
                      {isHovered ? (
                        <p className="">Você pode gastar <span className="inline-flex"><img className="h-[2.25rem] ml-3 mr-2" src={tensao2} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Pontos de Tensão</p></span> para recuperar alguma especialidade sua ou de outra sobrevivente que tenha sido incapacitada.</p>
                      ):(
                        <p className="">Gaste<span className="inline-flex"><img className="h-[2rem] ml-3 mr-2" src={tensao2} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Tensão</p></span> para recuperar especialidade incapacitada sua ou de outro jogador</p>
                      )}
                    </div>
        </>
    )
}

export default TomarJeito;