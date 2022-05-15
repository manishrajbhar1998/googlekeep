import React,{useState} from 'react';

function MyAccordion({ques,ans}){

    const [show,setShow] = useState(false);

    

    return(
        <>
            <div className='heading'>
                <p onClick={()=>setShow(!show)}>{show ? "-":"+"}</p>
                <h3>{ques} </h3>
            </div>
            {

                show ? <p className='result'>{ans}</p> : ' '
            }
            
        </>
    )
}

export default MyAccordion;