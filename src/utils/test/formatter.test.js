import {
  RenderImage,
  RenderId,
  Height,
  Weight,
  GetPokemon,
} from '../formatter/index';
import Data from './Data';

describe('utils/formatter', () => {
  describe('RenderImage', () => {
    test('should render pokemon image URL', () => {
      const testString = Data.id;
      expect(RenderImage(testString)).toEqual(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      );
    });
  });

  describe('RenderId', () => {
    test('should render pokemon id from URL', () => {
      expect(RenderId(Data)).toEqual('1');
    });
  });

  describe('Height', () => {
    test('should format height', () => {
      const { height } = Data;
      expect(Height(height)).toEqual(`2 feet 4" (0.7m)`);
    });
  });

  describe('Weight', () => {
    test('should format weight', () => {
      const { weight } = Data;
      expect(Weight(weight)).toEqual(`15.21 lbs (6.9kg)`);
    });
  });

  describe('GetPokemon', () => {
    test('should render all pokemon endpoint', () => {
      const page = '2';
      expect(GetPokemon(page)).toEqual('/pokemon/?limit=40&offset=0');
    });
  });
});
