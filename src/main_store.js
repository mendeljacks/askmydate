import axios from 'axios'
import {makeAutoObservable} from 'mobx'

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    sheet = {}
    
    fetch_questions = async () => {
        const response = await axios.get('https://spreadsheets.google.com/feeds/list/1hqVAmY7fvhTZnmrqhLHps_hXe6fI9wjc1rOJsDEhq3s/od6/public/values?alt=json')
        this.sheet = response.data
    }
}

export const main_store = window.main_store = new MainStore()