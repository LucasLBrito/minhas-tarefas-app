import * as S from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removerTarefa } from '../../store/reducers/tarefas'
import TarefaModel from '../../models/Tarefas'

type Props = TarefaModel

const Tarefa = ({ titulo, descricao, prioridade, estado, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={estado}>{estado}</S.Tag>
      <S.Descricao value={descricao}></S.Descricao>
      <S.BarraAcoes>
        {estaEditando ? (
          // Se estiver editando, mostra os botões Salvar e Cancelar
          <>
            <S.botaoSalvar>Salvar</S.botaoSalvar>
            <S.botaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.botaoCancelarRemover>
          </>
        ) : (
          // Se não estiver editando, mostra os botões Editar e Excluir
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.botaoCancelarRemover onClick={() => dispatch(removerTarefa(id))}>
              Excluir
            </S.botaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
