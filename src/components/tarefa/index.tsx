import * as S from './styles'
import { useState } from 'react'
import { Prioridade, Status } from '../../utils/enums/tarefas'

type Props = {
  titulo: string
  descricao: string
  prioridade: Prioridade
  status: Status
}

const Tarefa = ({ titulo, descricao, prioridade, status }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
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
            <S.botaoCancelarRemover>Excluir</S.botaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
