const config = {
  OUR_SECRET: 'our_secret_message_string',
  PRIMARY_NETWORK: {
    name: 'Mainnet',
    id: 1,
    chain: '0x1'
  },
  SECONDARY_NETWORK: {
    name: 'xDai',
    id: 100,
    chain: '0x64'
  },
  LINKS: {
    BACKEND: 'https://dev.serve.giveth.io/graphql',
    FRONTEND: 'https://typescript.giveth.io/',
    REPORT_ISSUE: 'https://github.com/Giveth/giveth-io-typescript/issues/new',
    GIVECONOMY: 'https://liquidity-mining-dapp.vercel.app/',
    DISCORD: 'https://discord.gg/Uq2TaXP9bC',
    DISCOURSE: 'https://forum.giveth.io/',
    GITHUB: 'https://github.com/Giveth/',
    TELEGRAM: 'https://t.me/Givethio',
    MEDIUM: 'https://medium.com/giveth/',
    TWITTER: 'https://twitter.com/Givethio',
    YOUTUBE: 'https://www.youtube.com/channel/UClfutpRoY0WTVnq0oB0E0wQ',
    REDDIT: 'https://reddit.com/r/giveth'
  }
}

if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'develop') {
  config.LINKS.FRONTEND = 'http://localhost:3000/'
  config.PRIMARY_NETWORK = {
    name: 'Ropsten',
    id: 3,
    chain: '0x3'
  }
}

export default config
