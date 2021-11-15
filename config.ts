const config = {
  QRAPHQL_SERVER: 'https://serve.giveth.io/graphql',
  APP_URL: 'https://typescript.giveth.io/',
  REPORT_ISSUE_URL: 'https://github.com/Giveth/giveth-io-typescript/issues/new',
  GIVeconomy_URL: 'https://liquidity-mining-dapp.vercel.app/'
}

if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'develop') {
  config.APP_URL = 'http://localhost:3000/'
}

export default config
