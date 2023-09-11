import React, { useState } from 'react';
import './FormWithSingleObjectState.css';



function FormWithSingleObjectState() {
    const [persInfo, setPersInfo] = useState({
        fullName: '',
        age: '',
        email: '',

    })
    const [display, setDisplay] = useState('');

    const handleInputChange = (e) => {
        setPersInfo((prevState)=>{
           return { ...prevState, [e.target.name]: e.target.value };
        })
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(`${persInfo.fullName}, ${persInfo.age}, ${persInfo.email}`)
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={persInfo.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={persInfo.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={persInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
                {display}
            </form>
        </div>
    );
}

export default FormWithSingleObjectState;
