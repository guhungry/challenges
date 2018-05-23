import fetch from 'isomorphic-fetch';
import { responseToJson } from '../utils/helpers'

export const charities =  () => fetch('http://localhost:3001/charities').then(responseToJson)
export const payments =  () => fetch('http://localhost:3001/payments').then(responseToJson)
export const donate = (id, amount, currency) => (
  fetch('http://localhost:3001/payments', {
    method: 'POST',
    body: JSON.stringify({ charitiesId: id, amount, currency }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(responseToJson)
)