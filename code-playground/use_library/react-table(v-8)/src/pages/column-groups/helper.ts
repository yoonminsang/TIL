import { Pokemon, pokemonData } from '../../__mock__';

export interface NewPokemon extends Pokemon {
  [key: string]: string;
}

const getNewPokemonData = (pokemonData: Pokemon[]) => {
  // 포켓몬 이름을 키로 사용하여 이미지 URL을 배열에 추가합니다.
  const groupedPokemon = pokemonData.reduce<
    Record<
      Pokemon['name'],
      {
        number: Pokemon['number'];
        name: Pokemon['name'];
        img: Pokemon['img'];
        images: Pokemon['img'][];
      }
    >
  >((acc, pokemon) => {
    if (!acc[pokemon.name]) {
      acc[pokemon.name] = { number: pokemon.number, name: pokemon.name, img: pokemon.img, images: [] };
    } else {
      acc[pokemon.name].images.push(pokemon.img);
    }
    return acc;
  }, {});

  // groupedPokemon을 배열로 변환합니다.
  const result: NewPokemon[] = Object.values(groupedPokemon).map((pokemon) => ({
    number: pokemon.number,
    name: pokemon.name,
    img: pokemon.img,
    ...pokemon.images.reduce<Record<string, string>>((acc, img, index) => {
      acc[`img${index}`] = img;
      return acc;
    }, {}),
  }));
  return result;
};

export const newPokemonData = getNewPokemonData(pokemonData);

const getMaxAdditionalImg = (newPokemonData: NewPokemon[]) =>
  newPokemonData.reduce((acc, cur) => {
    const max = Math.max(Object.keys(cur).length - 3, acc);
    return max;
  }, 0);
export const maxAdditionalImg = getMaxAdditionalImg(newPokemonData);
