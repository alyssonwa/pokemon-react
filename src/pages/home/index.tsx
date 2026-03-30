import { Container } from 'react-bootstrap';
import PokemonItem from '../../components/pokemonItem/pokemonItem';
import { useEffect, useState } from 'react';
import api from '../../services/api';

type PokemonDataItem = {
  name: string;
  src: string;
};

interface IPokemonResults {
  name: string;
  url: string;
}

interface IPokemonData {
  count: number;
  next: string;
  previous: string;
  results: IPokemonResults[];
}
const Home = () => {
  const [pokemonData, setpokemonData] = useState<PokemonDataItem[]>([]);

  useEffect(() => {
    api
      .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((response) => {
        console.log(response);
        const data: IPokemonData = response.data;
        const results: PokemonDataItem[] = data?.results.map((item) => ({
          name: item.name,
          src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        }));
        setpokemonData(results);
      });
  });
  return (
    <Container
      style={{ display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap' }}
    >
      {pokemonData.map((item: PokemonDataItem) => {
        return <PokemonItem key={item.name} src={item.src} name={item.name} />;
      })}
    </Container>
  );
};
export default Home;
