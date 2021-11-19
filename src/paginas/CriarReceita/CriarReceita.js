import { useState } from "react";
import { useNavigate } from "react-router";
import "./CriarReceita.css";

const categorias = [
    { id: 1, nome: "Prato Principal"},
    { id: 2, nome: "Comida Rápida" },
    { id: 3, nome: "Peixe e Fruto do Mar" },
    { id: 4, nome: "Sobremesa" },
    { id: 5, nome: "Massa" },
    { id: 6, nome: "Comida Árabe" },
    { id: 7, nome: "Comida Japonesa" },
    { id: 8, nome: "Comida Mexicana" },
    { id: 9, nome: "Comida Vegetariana" },
    { id: 10, nome: "Comida Vegana" },
    { id: 11, nome: "Outra" }
];

function CriarReceita() {

    const [idAtual, setIdAtual] = useState(6);
    const [novaReceita, setNovaReceita] = useState({ categoria: categorias[0].id + "" });
    const [novoIngrediente, setNovoIngrediente] = useState("");
    const [novoPasso, setNovoPasso] = useState("");
    const navigate = useNavigate()

    const mudouNome = (valor) => {
        const novoObjeto = {...novaReceita, nome: valor};
        setNovaReceita(novoObjeto);
    }

    const mudouDescricao = (valor) => {
        const novoObjeto = {...novaReceita, descricao: valor};
        setNovaReceita(novoObjeto);
    }

    const mudouImagem = (valor) => {
        const novoObjeto = {...novaReceita, imagem: valor};
        setNovaReceita(novoObjeto);
    }

    const mudouCategoria = (valor) => {
        const novoObjeto = {...novaReceita, categoria: valor};
        setNovaReceita(novoObjeto);
    }

    const mudouTempo = (valor) => {
        const novoObjeto = {...novaReceita, tempo: valor};
        setNovaReceita(novoObjeto);
    }

    const mudouPorcoes = (valor) => {
        const novoObjeto = {...novaReceita, porcoes: valor};
        setNovaReceita(novoObjeto);
    }

    const adicionouIngrediente = () => {
        const ingredientesAtuais = novaReceita.ingredientes ?? [];
        const novosIngredientes = [...ingredientesAtuais, novoIngrediente];
        const novoObjeto = {...novaReceita, ingredientes: novosIngredientes};
        setNovaReceita(novoObjeto);
        setNovoIngrediente("");
    }

    const adicionouPassoPreparacao = () => {
        const passosAtuais = novaReceita.preparacao ?? [];
        const novosPassos = [...passosAtuais, novoPasso];
        const novoObjeto = {...novaReceita, preparacao: novosPassos};
        setNovaReceita(novoObjeto);
        setNovoPasso("");
    }

    const validarDados = () => {
        if (novaReceita.nome == undefined || novaReceita.nome === "" || novaReceita.nome.trim() === "") {
            return [false, "Insira um nome válido para a receita."];
        }
        // descrição
        // tempo
        // ...
        return [true]
    }

    const getReceitasSalvas = () => {
        const receitas = localStorage.getItem("receitas");
        if (receitas != undefined && receitas != "") {
            return JSON.parse(receitas);
        }
        return [];
    }

    const salvarNovaLista = (receitas) => {
        localStorage.setItem("receitas", JSON.stringify(receitas));
    }

    const cadastrar = () => {
        const [dadosValidos, mensagemErro] = validarDados();
        if (!dadosValidos) {
            alert(mensagemErro);
            return
        }
        const receitaComId = {id: idAtual, ...novaReceita};
        const novaListaDeReceitas = [receitaComId, ...getReceitasSalvas()];
        salvarNovaLista(novaListaDeReceitas);
        setNovaReceita({ categoria: categorias[0].id + "" });
        setIdAtual(idAtual + 1);
        navigate("/");
    }

    return (
        <>
            <h2>Criar nova receita</h2>
            <form id="nova-receita-form">
                <label>
                    Nome: 
                    <input 
                    type="text" 
                    placeholder="insira o nome da receita" 
                    value={novaReceita.nome ?? ""} 
                    onChange={ evento => mudouNome(evento.target.value) } 
                    />
                </label>
                <label>
                    Descrição: 
                    <input 
                    type="text" 
                    placeholder="insira a descrição da receita"
                    value={novaReceita.descricao ?? ""} 
                    onChange={ evento => mudouDescricao(evento.target.value) } />
                </label>
                <label>
                    Imagem: 
                    <input 
                    type="text" 
                    placeholder="insira a URL com a imagem da receita" 
                    value={novaReceita.imagem ?? ""} 
                    onChange={ evento => mudouImagem(evento.target.value) } />
                </label>
                <label>
                    Categoria: 
                    <select name="categoria" onChange={ evento => mudouCategoria(evento.target.value) }>
                        { 
                            categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)
                        }
                    </select>
                </label>
                <label>
                    Tempo: 
                    <input 
                    type="text" 
                    placeholder="insira o tempo da receita" 
                    value={novaReceita.tempo ?? ""} 
                    onChange={ evento => mudouTempo(evento.target.value) } />
                </label>
                <label>
                    Porções: 
                    <input 
                    type="number" min="1" step="1" 
                    placeholder="insira a quantidade de porções da receita" 
                    value={novaReceita.porcoes ?? ""} 
                    onChange={ evento => mudouPorcoes(evento.target.value) } />
                </label>
                <label>
                    Ingredientes: 
                    <input 
                    type="text" 
                    placeholder="insira os ingredientes da receita"
                    value={novoIngrediente}
                    onChange={ evento => setNovoIngrediente(evento.target.value) }
                    />
                    <button type="button" style={{width: "22px", height: "22px"}} onClick={adicionouIngrediente}>+</button>
                </label>
                <h3>Ingredientes: </h3>
                <ul>
                    {
                        (novaReceita.ingredientes ?? []).map((ingrediente, indice) => <li key={indice}>{ingrediente}</li>)
                    }
                </ul>
                <label>
                    Preparação:
                    <input 
                    type="text" 
                    placeholder="insira os passos da receita" 
                    value={novoPasso}
                    onChange={evento => setNovoPasso(evento.target.value)}
                    />
                    <button type="button" style={{width: "22px", height: "22px"}} onClick={adicionouPassoPreparacao}>+</button>
                </label>
                <h3>Passos da preparação: </h3>
                <ol>
                    {
                        (novaReceita.preparacao ?? []).map((passo, indice) => <li key={indice}>{passo}</li>)
                    }
                </ol>
                <button type="button" onClick={cadastrar}>Cadastrar</button>
            </form>
        </>
    );
}

export default CriarReceita;