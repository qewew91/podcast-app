import {inputLengthHandler, renderQuestionsHandler, submitFormHandler} from './events'
import './style.css'

export const form = document.getElementById('form')
export const input = form.querySelector('#question-input')
export const submitBtn = form.querySelector('#submit')
submitBtn.disabled = true

window.addEventListener('load', renderQuestionsHandler)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', inputLengthHandler)

