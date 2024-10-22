import estilos from './BarraNavegacao.module.css';

export function
BarraNavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Series</li>
            </ul>
        </nav>
    )
}