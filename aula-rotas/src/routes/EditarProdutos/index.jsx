import { Link } from 'react-router-dom'
import { listaProdutos } from '../../components/ListaProdtos'

export default function EditarProduto(){

    return(
        <main>
            <h1>Editando o produto</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}