import aptos from './assets/image/aptos.svg';
import avalanche from './assets/image/avalanche.svg';
import base from './assets/image/base.svg';
import binance from './assets/image/binance.svg';
import blast from './assets/image/blast.svg';
import ethereum from './assets/image/ethereum.svg';
import polygon from './assets/image/polygon.svg';
import solana from './assets/image/solana.svg';
import tron from './assets/image/tron.svg';

export enum Currency {
  tron = 'tron',
  solana = 'solana',
  ethereum = 'ethereum',
  avalanche = 'avalanche',
  binance = 'binance',
  aptos = 'aptos',
  blast = 'blast',
  polygon = 'polygon',
  base = 'base',
}

export const currency = [
  {
    name: Currency.tron,
    image: tron,
    link: '#',
  },
  {
    name: Currency.solana,
    image: solana,
    link: '#',
  },
  {
    name: Currency.ethereum,
    image: ethereum,
    link: '#',
  },
  {
    name: Currency.avalanche,
    image: avalanche,
    link: '#',
  },
  {
    name: Currency.binance,
    image: binance,
    link: '#',
  },
  {
    name: Currency.aptos,
    image: aptos,
    link: '#',
  },
  {
    name: Currency.blast,
    image: blast,
    link: '#',
  },
  {
    name: Currency.polygon,
    image: polygon,
    link: '#',
  },
  {
    name: Currency.base,
    image: base,
    link: '#',
  },
];
