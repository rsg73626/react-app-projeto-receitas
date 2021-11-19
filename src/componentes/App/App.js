
import ListaReceitas from '../../paginas/ListaReceitas/ListaReceitas';
import CriarReceita from '../../paginas/CriarReceita/CriarReceita';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Link to="/">Receitas</Link> | <Link to="/nova">Nova receita</Link>
            <Routes>
                <Route path="/" element={<ListaReceitas />} />
                <Route path="/nova" element={<CriarReceita />} />
            </Routes>
        </BrowserRouter>        
    );
}

export default App;
