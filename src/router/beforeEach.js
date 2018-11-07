export default function (to, from, next) {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = `小仙女Vue`
  }
  next()
}
