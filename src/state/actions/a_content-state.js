export function setPageCount(count) {
  return {
    type: 'PAGE_COUNT',
    count
  }
}

export function setRoute(route) {
  return {
    type: 'CURRENT_ROUTE',
    route
  }
}

export function ageVerification(bool) {
  return {
    type: 'VERIFICATION_STATE',
    bool
  }
}