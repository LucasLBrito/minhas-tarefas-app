import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Prioridade, Status } from '../../utils/enums/tarefas'

type TagProps = {
  prioridade?: Prioridade
  status?: Status
}

function corDeFundoTag(props: TagProps) {
  if ('status' in props) {
    if (props.status === Status.PENDENTE) return variaveis.amarelo
    if (props.status === Status.CONCLUIDA) return variaveis.verde
  } else if ('prioridade' in props) {
    if (props.prioridade === Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === Prioridade.IMPORTANTE)
      return variaveis.amarelo_escuro
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  border-radius: 8px;
  margin-right: 16px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props: TagProps) => corDeFundoTag(props)};
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 8px;
`

export const botaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const botaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
