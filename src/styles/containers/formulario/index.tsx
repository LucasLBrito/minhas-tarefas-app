import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Campo, MainContainer, Resultado, BotaoSalvar } from '../../index'
import { Form, Opcao, Option } from './styles'
import * as enums from '../../../utils/enums/tarefas'
import Tarefa from '../../../models/Tarefas'
import { adicionarTarefa } from '../../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      descricao,
      9,
      prioridade,
      enums.Status.PENDENTE
    )
    dispatch(adicionarTarefa(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Resultado>Nova tarefa</Resultado>
      <Form onSubmit={cadastrar}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Titulo da tarefa"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descricao da tarefa"
        />
        <Opcao>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((item) => (
            <Option key={item}>
              <input
                value={item}
                type="radio"
                name="prioridade"
                id={item}
                defaultChecked={item === enums.Prioridade.NORMAL}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
              />
              <label htmlFor={item}>{item}</label>
            </Option>
          ))}
        </Opcao>
        <BotaoSalvar>Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
