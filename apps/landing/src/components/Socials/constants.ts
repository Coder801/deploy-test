import coingecko from './assets/icons/coingecko.svg';
import coinmarket from './assets/icons/coinmarket.svg';
import solscan from './assets/icons/solscan.svg';
import telegram from './assets/icons/telegram.svg';

export enum SocialList {
  telegram = 'telegram',
  coinmarket = 'coinmarket',
  coingecko = 'coingecko',
  solscan = 'solscan',
}

export const socials = [
  {
    name: SocialList.telegram,
    image: telegram,
    link: 'https://t.me/KekiusMaximusPepe',
  },
  {
    name: SocialList.coinmarket,
    image: coinmarket,
    link: 'https://coinmarketcap.com/dexscan/solana/BiArBTEqCmtJnzG8K3Xd2iWtgNR2Av24821zc2gveSb1/',
  },
  {
    name: SocialList.coingecko,
    image: coingecko,
    link: 'https://www.geckoterminal.com/solana/pools/BiArBTEqCmtJnzG8K3Xd2iWtgNR2Av24821zc2gveSb1',
  },
  {
    name: SocialList.solscan,
    image: solscan,
    link: 'https://solscan.io/token/22wCh4uLPJVZinj1wFyk2FVPuDiEcSHbeRWbJk7kimEY',
  },
];
