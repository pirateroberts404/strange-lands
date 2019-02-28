import fetchWpDataController from './../../controllers/fetchWpDataController'
import fetchInstaController from './../../controllers/fetchInstaController'
import NProgress from 'nprogress'

const apiData = (payload) => {
  return {
    type: 'API_DATA',
    payload
  }
}

const instaData = (payload) => {
  return {
    type: 'INSTA_DATA',
    payload
  }
}

export default () => {
  return (dispatch) => {
    NProgress.configure({ easing: 'ease', speed: 500 })
    NProgress.start()
    const _instaHandler = (insta_payload) => {
      dispatch(instaData(insta_payload))
    }
    const _dataHandler = (payload) => {
      dispatch(apiData(payload))
      window.prerenderReady = true;
      fetchInstaController()
        .then(response => response.json())
        .then((payload) => _instaHandler(payload))
        .then(() => NProgress.done())
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
    
  }
}
