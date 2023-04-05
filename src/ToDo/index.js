"use strict"
import reducer, { initState } from './reducer';
import { setJob, addJob, deleteJob } from './actions';
import '../App.css';
import { useReducer, useRef } from 'react';
import logger from './logger';




function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state

    const inputRef = useRef()
    return (
        <div style={{ padding: 30 }}>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter job'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button
                onClick={() => {
                    dispatch(addJob(job))
                    dispatch(setJob(''))
                    inputRef.current.focus()
                }}
            >
                Add
            </button>

            {
                jobs.map((job, index) => (
                    <li key={index}>
                        {index}. {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))
            }

        </div>
    );
}

export default App;
