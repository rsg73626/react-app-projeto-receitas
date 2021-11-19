
import "./Receita.css";

function Receita({ nome, descricao, imagem, categoria, tempo, porcoes, ingredientes, preparacao }) {
    return (
        <article className="receita">
            <img src={imagem} alt="" />
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>{categoria}</p>
            <p>Tempo de preparo: {tempo}</p>
            <p>Rende {porcoes} porções.</p>
            <details>
                <summary>Detalhes</summary>
                <ul>
                    { ingredientes.map((ingrediente, indice) => <li key={indice}>{ingrediente}</li>) }
                </ul>
                <ol>
                    { preparacao.map((passo, indice) => <li key={indice}>{passo}</li>) }
                </ol>
            </details>
        </article>
    );
}

export default Receita;