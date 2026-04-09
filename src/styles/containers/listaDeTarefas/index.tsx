import Tarefa from '../../../components/tarefa'
import * as S from './styles'
import { Prioridade, Status } from '../../../utils/enums/tarefas'

const tarefasExemplo = [
  {
    titulo: 'Estudar React',
    descricao: 'Estudar React',
    prioridade: Prioridade.IMPORTANTE,
    status: Status.PENDENTE
  },
  {
    titulo: 'Pagar faculdade',
    descricao: 'Pagar faculdade',
    prioridade: Prioridade.URGENTE,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Ir a acadamia',
    descricao: 'Ir a acadamia',
    prioridade: Prioridade.URGENTE,
    status: Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <S.MainContainer>
    <p> 2 tarefas marcadas como: &quot;categoria&quot; e &quot;tempos&quot;</p>
    <ul>
      {tarefasExemplo.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </S.MainContainer>
)

export default ListaDeTarefas
