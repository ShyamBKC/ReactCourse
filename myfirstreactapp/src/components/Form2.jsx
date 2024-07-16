import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/images/cais_bg.jpeg'; // Adjust the relative path


const Form2 = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        hobbie: '',
        gender: '',
        programming: []
    });
     
    const handleChange = e => {
        const { name, value, type, checked } = e.target;

      
            setFormData((prevState) => ({
                ...prevState,
                [name]: type === 'checked' 
                ? (checked
                    ? [...prevState.programming,value]
                    :prevState.programming.filter((lang) => lang !== value))
                    :value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    };

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '150%', // Adjust this value to make the image appear smaller
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '50px', borderRadius: '10px' }}>
                <label htmlFor='username'>Username </label>
                <input type='text' name='username'
                    value={formData.username}
                    onChange={handleChange}
                /> <br /> <br />

                <label htmlFor='password'>Password </label>
                <input type='password' name='password'
                    value={formData.password}
                    onChange={handleChange}
                /> <br /> <br />

                <label htmlFor="hobbie">Hobbie</label>
                <select name="hobbie" id="hobbie" value={formData.hobbie}
                    onChange={handleChange}
                >
                    <option value="football">Football</option>
                    <option value="cricket">Cricket</option>
                    <option value="others">Others</option>
                </select>  <br /> <br />

                <div>
                    <label htmlFor="male">Male</label>
                    <input type='radio' name="gender" id="male"
                        value="male"
                        onChange={handleChange}
                        checked={formData.gender === "male"}
                    />

                    <label htmlFor="female">Female</label>
                    <input type='radio' name="gender" id="female"
                        value="female"
                        onChange={handleChange}
                        checked={formData.gender === "female"}
                    />
                </div>

                <div>
                    <p>Programming Language</p>
                    <div>
                        <input type="checkbox" name="programming" id="css"
                            value="css"
                            checked={formData.programming.includes('css')}
                            onChange={handleChange}
                        />
                        <label htmlFor="css">CSS</label>
                    </div>
                    <div>
                        <input type="checkbox" name="programming" id="js"
                            value="js"
                            checked={formData.programming.includes('js')}
                            onChange={handleChange}
                        />
                        <label htmlFor="js">JS</label>
                    </div>
                    <div>
                        <input type="checkbox" name="programming" id="html"
                            value="html"
                            checked={formData.programming.includes('html')}
                            onChange={handleChange}
                        />
                        <label htmlFor="html">HTML</label>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form2;
