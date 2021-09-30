import Titulo from '../../components/Usando-operador-ternario'

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
                pequeno={true}
            />

            <Titulo
                principal = "Página Login"
                descricao = "Informe email e senha"
                pequeno
                // funciona da mesma forma que o anterior
            />
        </div>
    )
} 