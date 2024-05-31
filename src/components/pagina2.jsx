import { useState } from 'react';
import "../css/index.css"
import Video from './videoInicial';
import Pagina1 from './pagina1';

function Pagina2(){
        const [secaoAtual, setSecaoAtual] = useState('pagina2');
    
        const cliqueSecao = (secao) => {
            setSecaoAtual(secao);
        };

    return(
        <>
        <div>
        {secaoAtual === 'pagina2' && (
            <><div className="ContainerP2">
                        <div className="text-intro2">
                            <h1> Aaaaa, você clicou... Eu sabia! 🥰</h1>
                            <span> Agora é sério... vou te mostrar porquê te trouxe até aqui!</span><br></br>

                            <button className="buttonP2" onClick={() => cliqueSecao('videoInicial')}> Vai logo, amor! Estou ansioso </button>

                        </div>
                    </div><button className="buttonMenuVoltar1" onClick={() => cliqueSecao('pagina1')}> Voltar </button></>
        )}
        
    </div>

    <div className='secao'>
        {secaoAtual === 'videoInicial' && <Video />}
    </div>

    <div className='secao'>
        {secaoAtual === 'pagina1' && <Pagina1/>}
    </div>
</>
);
}

export default Pagina2;
