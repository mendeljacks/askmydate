import {observer} from 'mobx-react-lite'
import {useEffect} from 'react'
import {main_store} from './main_store'
import './styles.css'

export const Main = observer(() => {
    useEffect(() => {
        main_store.fetch_questions()
    }, [])
    return <>
        <h1>Ask my date ❤️</h1>
        <h4>with Toby Lieder</h4>
        <div className='container'>
            {main_store.sheet?.feed?.entry?.map((entry, i) => {
                const question = entry.title.$t
                return <p key={question}>{i+1}. {question}</p>
            })}
        </div>
    </>
})