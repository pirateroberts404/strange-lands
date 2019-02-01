import fetch from 'isomorphic-fetch'
import config from './../../config.json'

export default () => {
  return new Promise((resolve, reject) => {
    fetch(config.insta_endpoint,
      { method: 'GET' })
        .then(res => resolve(res))
        .catch(err => reject(err))
  })
}