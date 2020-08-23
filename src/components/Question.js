import React from 'react'
import s from './components.module.css'

export default function Question({question, answer}) {

	function toggleQuestion(event) {

		event.target.closest('.' + s.question_wrapper).querySelector('.' + s.question).classList.toggle(s.hidden)
	}

	return (
		<div className = {s.question_wrapper}>
			<div onClick = {toggleQuestion} className = {s.question_title}>
				{question} 
			</div>
			<div className = {s.question + ' ' + s.hidden}>
				{answer}
			</div>
		</div>
	)
}