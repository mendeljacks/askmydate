import {observer} from 'mobx-react-lite'
import {useEffect} from 'react'
import {main_store} from './main_store'
import {Button} from '@material-ui/core'
import './styles.css'

export const Main = observer(() => {
    useEffect(() => {
        main_store.fetch_questions()
    }, [])
    return <>
        <h1>Ask my date ❤️</h1>
        <h4>with Toby Lieder</h4>
        <div className='container'>
            <p>{main_store.question_index + 1}. {main_store.sheet?.feed?.entry?.[main_store.question_index]?.title?.$t}</p>
        </div>
        <br />
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'auto', placeItems: 'center', gap: '10px'}}>
            <Button
                style={{borderRadius: '20px', height: '80px', width: '100px'}}
                disabled={main_store.question_index === 0} onClick={() => main_store.back()}
                variant="contained" color="primary">Back</Button>
            <Button
                style={{borderRadius: '20px', height: '80px', width: '100px'}}
                disabled={main_store.question_index === main_store.sheet?.feed?.entry?.length - 1} onClick={() => main_store.next()}
                variant="contained" color="primary">Next</Button>
        </div>
    </>
})