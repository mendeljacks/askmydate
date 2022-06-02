import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
class MainStore {
    constructor() {
        makeAutoObservable(this)
    }

    questions = []
    question_index = 0
    started = false
    random_mode = false
    seen_questions_indexes = []

    fetch_questions = async () => {
        const spreadsheet_id = '1hqVAmY7fvhTZnmrqhLHps_hXe6fI9wjc1rOJsDEhq3s'
        const sheet_name = 'Sheet1'
        const ky = 'AIzaSyD0P7fn'
        const ky2 = '7s4n685KG1xCoeI8ikLnQhCs84'
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${sheet_name}?key=${ky}-${ky2}`
        const response = await axios.get(url).catch(console.error)
        runInAction(() => {
            this.questions = response.data.values.slice(1).map(el => el[0])
        })
    }

    next = () => {
        this.seen_questions_indexes.push(this.question_index)

        if (this.random_mode) {
            this.question_index = random(0, this.questions.length - 1)
        } else {
            this.question_index++
        }
    }

    back = () => {
        this.question_index = this.seen_questions_indexes.pop()
    }

    begin = () => {
        this.started = true
    }

    toggle_random_mode = () => {
        this.random_mode = !this.random_mode
    }
}

export const main_store = (window.main_store = new MainStore())
