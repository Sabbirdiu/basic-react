import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return <h4>Hey its me sabbir.The boy </h4>
}
ReactDom.render(<Greeting/>, document.getElementById('root'));