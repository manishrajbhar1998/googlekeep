import React,{useState} from 'react';
import {questions} from './Api';
import './accordion.css';
import MyAccordion from './MyAccordion';

function Accordion(){

    const [data,setData]  = useState(questions)

    return(
        <div className='container'>
            <h1>hello world</h1>
            {
              data.map(({id,question,answer})=>{
                return <MyAccordion key={id} ques={question} ans={answer}/>
              })  
            }
        </div>
    );
}

export default Accordion;