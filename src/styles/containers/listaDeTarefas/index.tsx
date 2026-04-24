import Tarefa from '../../../components/tarefa'
import { RootReducer } from '../../../store'
import { useSelector } from 'react-redux'
import { MainContainer, Resultado } from '../../index'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarTarefas = () => {
    let TarefasFiltradas = itens

    if (termo !== undefined) {
      TarefasFiltradas = TarefasFiltradas.filter((item) =>
        item.titulo.toLowerCase().includes(termo.toLowerCase())
      )

      if (criterio === 'prioridade') {
        TarefasFiltradas = TarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }

      if (criterio === 'status') {
        TarefasFiltradas = TarefasFiltradas.filter(
          (item) => item.estado === valor
        )
      }
    }
    return TarefasFiltradas
  }
  const tarefasDoFiltro = filtrarTarefas()

  const exibeResultadoDoFiltro = (quantidade: number) => {
    let mensagem = ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas como : todas ${
        termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
      }`
    } else {
      mensagem = `${quantidade} tarefas como : ${criterio} = ${valor} ${
        termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
      }`
    }
    return mensagem
  }
  const mensagemDoFiltro = exibeResultadoDoFiltro(tarefasDoFiltro.length)
  return (
    <MainContainer>
      <Resultado as="p">{mensagemDoFiltro}</Resultado>
      <ul>
        {tarefasDoFiltro.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              estado={t.estado}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
