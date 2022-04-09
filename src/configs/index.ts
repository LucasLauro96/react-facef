export const configs = {
    apis: {
      cep: process.env.REACT_APP_CEP_URL || 'http://cep.republicavirtual.com.br/web_cep.php',
      github: process.env.REACT_APP_GITHUB_URL || 'https://api.github.com',
      starWars: process.env.REACT_APP_STAR_WARS_BASE_URL || 'https://star-wars-api-unifacef.herokuapp.com',
    },
    sentry: process.env.REACT_APP_SENTRY_DSN || 'https://0b2771dd94fa4a70a0ee9b481805c782@o1196605.ingest.sentry.io/6319615'
}

export default configs;