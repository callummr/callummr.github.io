import React from 'react'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import solarizedLight from 'react-syntax-highlighter/dist/styles/solarized-light'

registerLanguage('javascript', js)

export default ({ content }) => (
  <SyntaxHighlighter language="javascript" style={solarizedLight}>
    {content}
  </SyntaxHighlighter>
)
