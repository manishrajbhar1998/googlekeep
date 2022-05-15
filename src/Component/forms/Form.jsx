import React,{useState} from 'react';

const Form = () => {


    const [data,setData] = useState({
        fname:'',
        lname:'',
        email:''
    });
    
    function updateData(eve){
 
        const {value,name} = eve.target;
        
        setData((preValue)=>{

            

            return{
                ...preValue,
                [name]: value
            }

            // if(name == 'fname'){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email
            //     }
            // }else if(name == 'lname'){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email
            //     }
            // }else{
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value
            //     }
            // }
        });

    }

    function onSubmits(e){
        e.preventDefault();
    }

    return(
        <div className="container">
            <h1>Hello {data.fname} {data.lname} {data.email}</h1>
            <form onSubmit={onSubmits}>
                <input type="text" placeholder='Enter your First name' name="fname" value={data.fname} onChange={updateData}/><br/><br/>
                <input type="text" placeholder='Enter your Last name' name="lname" value={data.lname} onChange={updateData}/><br/><br/>
                <input type="text" placeholder='Enter your Last name' name="email" value={data.email} onChange={updateData}/><br/><br/>
                <button type='submit'>Click me 👍</button>
            </form>
        </div>
    );
}

export default Form;