import Tarefa from '../../../components/tarefa'
import { RootReducer } from '../../../store'
import * as S from './styles'
import { useSelector } from 'react-redux'

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

  return (
    <S.MainContainer>
      <p>
        {' '}
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}
        &quot;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtrarTarefas().map((t) => (
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
    </S.MainContainer>
  )
}

export default ListaDeTarefas
