import { useEffect, useState } from "react";
import tensao from '../../assets/tensao.png'

function Carisma() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <h2 className="text-3xl flex"><img className="h-[2.25rem] mr-3" src={tensao} alt="" />CARISMA | OMBRO AMIGO</h2>
                <div className={`transition-all duration-300 ${isHovered ? "text-3xl bg-black/70 p-5 rounded-2xl my-3 shadow-black shadow-md" : "text-2xl py-3"}`}
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                // onClick={()=> isHovered ? setIsHovered(false) : setIsHovered(true)}
                >
                  {isHovered ? (
                    <p>Você pode gastar quantos <span className="inline-flex"><img className="h-[2.25rem] ml-3 mr-2" src={tensao} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Pontos de Tensão</p></span> para fornecer a mesma quantia em PTs para outra sobrevivente a sua escolha. Essa vantagem só pode ser usada uma vez a cada encontro.</p>
                  ):(
                    <p>Transfira quantos <span className="inline-flex"><img className="h-[2rem] ml-3 mr-2" src={tensao} alt="" /><p className="bg-[#e01030] font-bold mr-2 rounded-xl p-1">Tensão</p></span> quiser para outro player. Só pode ser usada uma vez a cada encontro.</p>
                  )}
                </div>
        </>
    )
}

export default Carisma;