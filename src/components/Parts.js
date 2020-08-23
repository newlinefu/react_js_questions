import React from 'react'
import OnePart from './OnePart'
import s from './components.module.css'

export default function Parts({state}) {
	return (
		<main className = {s.all_parts}>
			{	
				state.titles.map(title => (
					<OnePart title = {title}>
					{
						state.questions.filter(q => q.title === title)
					}
					</OnePart>)
				)
			}
		</main>
	)
}