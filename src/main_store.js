import axios from 'axios'
import {makeAutoObservable, runInAction} from 'mobx'
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
class MainStore {
    constructor() {
        makeAutoObservable(this)
    }

    sheet = {}
    question_index = 0
    started = false
    random_mode = false

    get question_count() {
        return this.sheet?.feed?.entry?.length - 1
    }

    fetch_questions = async () => {
        const response = await axios.get('https://spreadsheets.google.com/feeds/list/1hqVAmY7fvhTZnmrqhLHps_hXe6fI9wjc1rOJsDEhq3s/od6/public/values?alt=json')
        runInAction(() => {
            this.sheet = response.data
        })
    }

    next = () => {
        if (this.random_mode) {
            this.question_index = random(0, this.question_count - 1)
        } else {
            this.question_index++
        }
    }

    back = () => {
        this.question_index--
    }

    begin = () => {
        this.started = true
    }

    toggle_random_mode = () => {
        this.random_mode = !this.random_mode
    }
}

export const main_store = window.main_store = new MainStore()