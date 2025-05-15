const FIVE_DIGITS_MIN = 10000
const FIVE_DIGITS_MAX = 99999

function generateMemberId() {
  const id = Math.floor(Math.random() * (FIVE_DIGITS_MAX - FIVE_DIGITS_MIN + 1)) + FIVE_DIGITS_MIN
  return id
}

module.exports = generateMemberId