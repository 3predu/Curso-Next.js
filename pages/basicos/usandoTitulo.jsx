import Titulo from '../../components/Título'

export default function usandoTitulo(){
    return (
        <div>
            <Titulo
                principal = "Página Principal"
                descricao = "Descrição"
            />

            <Titulo
                principal = "Página Login"
                descricao = "Informe email e senha"
            />
        </div>
    )
} 