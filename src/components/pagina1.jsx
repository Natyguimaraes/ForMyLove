import { useState } from 'react';
import "../css/index.css";
import Pagina2 from "./pagina2";

function Pagina1() {
    const [secaoAtual, setSecaoAtual] = useState('pagina1');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <>
            <div>
                {secaoAtual === 'pagina1' && (
                    <div className="ContainerP1">
                    <div className="text-intro">
                        <h1> Oi, amor! </h1>
                        <span> Para começar...  </span> <br />
                        <span> É tão bom te ter como <b>meu companheiro</b> </span><br />
                        <span> <b>Amigo</b>  </span> <br />
                        <span> <b>E namorado </b> 💖</span> <br />

                        <div className="text-perg">
                            <span> Agora... Quer saber o por quê te trouxe até aqui?</span> <br />
                            <span> <b>DIZ QUE SIMMM</b> 🥰</span> <br />
                            <button onClick={() => cliqueSecao('pagina2')}> SIM </button>
                        </div>
                        
                    </div>
                   
                    </div>
                )}
            </div>

            <div className='secao'>
                {secaoAtual === 'pagina2' && <Pagina2 />}
            </div>
        </>
    );
}

export default Pagina1;
