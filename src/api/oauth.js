import { post } from 'axios'
import store from '../store'

const region = 'eu'
const clientId = '7958e6cf4d9d4cb6b0d1db97ae284df1'
const clientSecret = '6eGrIFuSGWb3Zgi0H9EctYPVE6fscbNP'
const API_URL = `https://${region}.battle.net/oauth/token`

/**
 * Retrieving an access token.
 * After an application retrieves an access token, it provides that token when making requests to API resources.
 * @returns {*}
 */
function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    auth: {
      username: clientId,
      password: clientSecret
    }
  }
  return post(`${API_URL}`, body, config)
    .then(res => {
      console.log('GUARDANDO TOKEN.....')
      store.dispatch('setAccessToken', res.data.access_token)
    })
}

export {
  getToken
}
