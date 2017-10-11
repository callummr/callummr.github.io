import React from 'react'
import Link from 'gatsby-link'
import Code from '../components/Code'

const text = `
const me = {
  name: 'Callum Mellor-Reed', 
  type: engineers.javascript, 
  skills: [
    'react',
    'redux',
    'javascript'
  ],
  dependencies: [ '☕️', '🎮', '🍕' ],
  contact: {
    email: 'me@callummr.com',
    twitter: '@callummr'
  }
};
`

const IndexPage = () => <Code content={text} />

export default IndexPage
