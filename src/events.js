import { Question } from './question'
import {input, submitBtn} from './app'
import {isValid} from './utils'

export const submitFormHandler = event => {
    event.preventDefault()
    if (isValid(input.value)) {
        const question = {
           text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitBtn.disabled = true
        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            submitBtn.disabled = false
        })
    }
}

export const inputLengthHandler = () => {
    submitBtn.disabled = !isValid(input.value)
}

export const renderQuestionsHandler = () => Question.renderList()