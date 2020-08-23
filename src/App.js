import React from 'react'
import StateContainer from './components/StateContainer'
import {jsQState, reactQState} from './states.js'

export default function App() {
  return (
      <div>
        <StateContainer state={reactQState} title='React'/>
        <StateContainer state={jsQState} title='JavaScript'/>
      </div>
  )
}
