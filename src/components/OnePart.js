import React from 'react'
import Question from './Question'
import s from './components.module.css'

export default function OnePart({title, children}) {
	return (
		<div className = {s.part_wrapper}>
			<div className = {s.part_title}>
				{title}
			</div>
			{
				children.map(question => <Question
					question = {question.question}
					answer = {question.answer}
					/>)
			}
		</div>
	)
}