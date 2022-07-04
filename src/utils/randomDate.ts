import React from 'react'

const generateRandomDate = (start: Date, end: Date) => {
  // prettier-ignore
  return new Date( start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export { generateRandomDate }
