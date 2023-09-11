import React, { useState } from 'react';
import './FormWithBool.css';



function FormWithBool() {
    const [persInfo, setPersInfo] = useState({
        fullName: '',
        gender: 'Male',
        married: false,
        mobile: ''

    })
    const [display, setDisplay] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPersInfo((prevState) => {
            return { ...prevState, [name]: type === 'checkbox' ? checked : value };
        })
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(`A ${persInfo.gender}, ${persInfo.fullName}, ${persInfo.married ? 'married' : 'unmarried'}, can be reached at ${persInfo.mobile}`)
    };

    return (
        <>
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
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value='Male'
                            checked={persInfo.gender === 'Male'}
                            onChange={handleInputChange}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value='Female'
                            checked={persInfo.gender === 'Female'}
                            onChange={handleInputChange}
                        />
                        Female
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="married">Married:</label>
                    <input
                        type="checkbox"
                        name="married"
                        value={persInfo.married}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                        type="number"
                        name="mobile"
                        value={persInfo.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
                
            </form>
        </div>
        <div>
            <h3>{display}</h3>
        </div>
        </>
    );
}

export default FormWithBool;
