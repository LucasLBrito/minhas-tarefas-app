import Tarefa from '../../../components/tarefa'
import { RootReducer } from '../../../store'
import * as S from './styles'
import { useSelector } from 'react-redux'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <S.MainContainer>
      <p>
        {' '}
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;tempos&quot;
      </p>
      <ul>
        {itens.map((t) => (
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
