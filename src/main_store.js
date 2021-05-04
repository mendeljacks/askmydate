import axios from 'axios'
import {makeAutoObservable} from 'mobx'

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    sheet = {}
    question_index = 0
    
    fetch_questions = async () => {
        const response = await axios.get('https://spreadsheets.google.com/feeds/list/1hqVAmY7fvhTZnmrqhLHps_hXe6fI9wjc1rOJsDEhq3s/od6/public/values?alt=json')
        this.sheet = response.data
    }

    next = () => {
        this.question_index ++
    }
    
    back = () => {
        this.question_index --
    }
}

export const main_store = window.main_store = new MainStore()