import Tarefa from '../../../components/tarefa'
import { RootReducer } from '../../../store'
import * as S from './styles'
import { useSelector } from 'react-redux'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <S.MainContainer>
      <p>
        {' '}
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;tempos&quot;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.estado}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeTarefas
