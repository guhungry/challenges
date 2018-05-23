import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { createLogger } from 'redux-logger'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Logger Middleware ------------- */
  // middleware.push(createLogger({ predicate: (getState, action) => __DEV__ }))

  /* ------------- Saga Middleware ------------- */

  // const sagaMiddleware = createSagaMiddleware({  })
  // middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  // sagaMiddleware.run(rootSaga)

  return store
}