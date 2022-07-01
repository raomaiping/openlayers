export const handleRouter = (router) => {
  const paths = ['/', '/home']
  let newRouter = router.filter(item => !paths.includes(item.path)).map(item => {
    let { path, meta, children } = item
    return {
      path,
      title: meta.title,
      children: children?.map(childrenItem => ({
        path: `${path}/${childrenItem.path}`,
        title: childrenItem.meta.title,
      })) || []
    }
  })
  return newRouter
}