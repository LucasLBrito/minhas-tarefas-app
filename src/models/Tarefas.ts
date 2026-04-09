import * as enums from '../utils/enums/tarefas'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  estado: enums.Status
  descricao: string
  id: number

  constructor(
    // os parametros que vão chegar
    titulo: string,
    descricao: string,
    id: number,
    prioridade: enums.Prioridade,
    estado: enums.Status
  ) {
    // os parametros que vão ser guardados e this é a referencia da classe
    this.titulo = titulo
    this.descricao = descricao
    this.id = id
    this.prioridade = prioridade
    this.estado = estado
  }
}

export default Tarefa
