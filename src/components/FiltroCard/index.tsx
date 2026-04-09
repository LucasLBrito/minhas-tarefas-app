import { Card, Contador, Label } from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = ({ ativo }: Props) => (
  <Card ativo={ativo}>
    <Contador>3</Contador>
    <Label>pendentes</Label>
  </Card>
)

export default FiltroCard
