export function verification () {
  return process.env.NODE_ENV === 'development' ? false : true
}

export function pageCount (state = 0, action) {
  switch (action.type) {
    case 'PAGE_COUNT':
      return action.count
    default:
      return state
  }
}

export function routeState (state = null, action) {
  switch (action.type) {
    case 'CURRENT_ROUTE':
      return action.route
    default:
      return state
  }
}

export function verificationState (state = verification(), action) {
  switch (action.type) {
    case 'VERIFICATION_STATE':
      return action.bool
    default:
      return state
  }
}