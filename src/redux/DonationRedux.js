import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateTotalDonation: ['amount'],
  updateMessage: ['message']
})

export const DonationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  donate: 0,
  message: '',
}

/* ------------- Reducers ------------- */

export const updateTotalDonation = (state, action) => {
  const { amount } = action
  return { ...state, amount: state.amount + amount }
}

export const updateMessage = (state, action) => {
  const { message } = action
  return { ...state, message }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_TOTAL_DONATION]: updateTotalDonation,
  [Types.UPDATE_MESSAGE]: updateMessage
})
