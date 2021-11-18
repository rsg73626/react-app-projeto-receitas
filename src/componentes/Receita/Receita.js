
import "./Receita.css";

function Receita({ nome, descricao, imagem, categoria, tempo, porcoes, ingredientes, preparacao }) {
    return (
        <article className="receita">
            <img src={imagem} alt="" />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>{categoria}</p>
            <p>Tempo de preparo: {tempo}</p>
            <p>Rende {porcoes} porções.</p>
            <ul>
                { ingredientes.map((ingrediente, indice) => <li key={indice}>{ingrediente}</li>) }
            </ul>
            <ol>
                { preparacao.map((passo, indice) => <li key={indice}>{passo}</li>) }
            </ol>
        </article>
    );
}

export default Receita;