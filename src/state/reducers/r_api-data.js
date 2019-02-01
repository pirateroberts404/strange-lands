export function apiData (state = false, action) {
  switch (action.type) {
    case 'API_DATA':
      return action.payload
    default:
      return state
  }
}

export function instaData(state = false, action) {
  switch (action.type) {
    case 'INSTA_DATA':
      return action.payload
    default:
      return state
  }
}
