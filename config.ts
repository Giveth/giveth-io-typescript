const config = {
  QRAPHQL_SERVER: 'https://serve.giveth.io/graphql',
  APP_URL: 'https://typescript.giveth.io/',
  REPORT_ISSUE_URL: 'https://github.com/Giveth/giveth-io-typescript/issues/new',
  GIVeconomy_URL: 'https://liquidity-mining-dapp.vercel.app/',
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
  }
}

if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'develop') {
  config.APP_URL = 'http://localhost:3000/'
  config.PRIMARY_NETWORK = {
    name: 'Ropsten',
    id: 3,
    chain: '0x3'
  }
}

export default config
