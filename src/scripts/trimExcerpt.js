export default text => {
  const str = text.substring(0, 152)
  return str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '')
}