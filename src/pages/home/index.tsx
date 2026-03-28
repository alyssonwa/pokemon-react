import { Container } from 'react-bootstrap';
import PokemonItem from '../../components/pokemonItem/pokemonItem';

type PokemonDataItem = {
  name: string;
  src: string;
};
const pokemonData: PokemonDataItem[] = [
  {
    name: 'Bulbasaur',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  },
  {
    name: 'Bulbasaur',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
  },
  {
    name: 'Venusaur',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
  },
];
const Home = () => {
  return (
    <Container style={{ display: 'flex', gap: 10, marginTop: 10 }}>
      {pokemonData.map((item: PokemonDataItem) => {
        return <PokemonItem src={item.src} name={item.name} />;
      })}
    </Container>
  );
};
export default Home;
