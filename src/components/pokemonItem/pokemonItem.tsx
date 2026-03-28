import { Card } from 'react-bootstrap';

type PokemonItemProps = {
  src: string;
  name: string;
};
const PokemonItem = ({ src, name }: PokemonItemProps) => {
  return (
    <Card style={{ width: '15rem ', padding: '10px' }}>
      <Card.Img variant="top" src={src} />
      <Card.Title style={{ paddingTop: '5px' }}>{name}</Card.Title>
    </Card>
  );
};
export default PokemonItem;
