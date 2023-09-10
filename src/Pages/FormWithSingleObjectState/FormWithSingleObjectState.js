import React, { useState } from 'react';
import './FormWithSingleObjectState.css';



function FormWithSingleObjectState() {
    const [persInfo, setPersInfo] = useState({
        name: '',
        age: '',
        email: '',

    })
    const [display, setDisplay] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(`${persInfo.name}, ${persInfo.age}, ${persInfo.email}`)
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={persInfo.name}
                        onChange={(e) => setPersInfo({ ...persInfo, name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={persInfo.age}
                        onChange={(e) => setPersInfo({ ...persInfo, age: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={persInfo.email}
                        onChange={(e) => setPersInfo({ ...persInfo, email: e.target.value })}
                    />
                </div>
                <button type="submit">Submit</button>
                {display}
            </form>
        </div>
    );
}

export default FormWithSingleObjectState;
