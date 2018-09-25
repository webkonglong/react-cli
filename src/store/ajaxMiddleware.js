export default ({ dispatch, getState }) => next => action => {
  const { promise, types, ...rest } = action

  if (!promise) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types
  next({ ...rest, type: REQUEST })

  return promise(dispatch, getState).then(
    result => next({ ...rest, result, type: SUCCESS || `${REQUEST}/success` }),
    error => next({ ...rest, error, type: FAILURE || `${REQUEST}/fail` })
  )
}
