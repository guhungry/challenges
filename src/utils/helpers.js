export const donationAmount = donation => donation.amount || 0
export const summaryDonations = (danations) => danations.reduce((accumulator, value) => (accumulator + value))

export const noop = () => {}
export const responseToJson = response => response.json()