import {observer} from 'mobx-react-lite'
import {useEffect} from 'react'
import {main_store} from './main_store'
import {Button} from '@material-ui/core'
import './styles.css'

const IntroPage = observer(() => {
    return <center style={{display: 'grid', placeItems: 'center', height: '50vh', marginTop: '20vh'}}>
        <h1>Want to know your partner better?</h1>
        <h4>Try the top <span style={{color: 'orange'}}>{main_store.sheet?.feed?.entry?.length - 1 || undefined}</span> Questions selected by a professional dating coach.
        <br />
            <br />
        For singles and couples of all ages!</h4>
        <Button variant='contained' color='inherit' onClick={() => main_store.begin()}>Begin</Button>

        <br />
        <h4 style={{textAlign: 'left'}}>
            <span style={{textDecoration: 'underline'}}>Toby Lieder</span>
            <br />
            Shadchan and Dating coach
            <br/>
            <a style={{color: 'lightgray'}} href='https://tobydatingcoach.com'>tobydatingcoach.com</a>
            <br/>
            tobylieder@gmail.com
        </h4>
    </center>
})

const QuestionsPage = observer(() => {
    return <>
        <center>
            <h1>Ask my date ❤️</h1>
            <h4>with Shadchan Toby Lieder <a style={{color: 'lightgray'}} href='https://tobydatingcoach.com'>tobydatingcoach.com</a></h4>
        </center>

        <div className='container'>
            <p>{main_store.question_index + 1}. {main_store.sheet?.feed?.entry?.[main_store.question_index]?.title?.$t}</p>
        </div>
        <br />
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: 'auto', placeItems: 'center', gap: '10px'}}>
            <Button
                style={{borderRadius: '20px', height: '80px', width: '100px'}}
                disabled={main_store.question_index === 0} onClick={() => main_store.back()}
                variant="contained" color="primary">Back</Button>
            <span style={{color: 'lightgray'}}>{main_store.question_index + 1} / {main_store.question_count}</span>
            <Button
                style={{borderRadius: '20px', height: '80px', width: '100px'}}
                disabled={main_store.question_index === main_store.question_count - 1} onClick={() => main_store.next()}
                variant="contained" color="primary">Next</Button>
        </div>
    </>
})


export const Main = observer(() => {
    useEffect(() => {
        main_store.fetch_questions()
    }, [])
    return main_store.started ? <QuestionsPage /> : <IntroPage />
})