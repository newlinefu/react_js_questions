import React, {useState} from 'react'
import Parts from './Parts'
import s from './components.module.css'

export default function StateContainer({state, title}) {
	return (
		<div className = {s.state_container_wrapper}>
			<div className = {s.state_container_title}>
				{title}
			</div>
			<Parts state = {state}/>
		</div>
	)
}

