import React, { useState, useEffect } from 'react'

export const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errors, setErrors] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/diary')
        } else {
            setLoading(false)
        }
    }, [])

    const onSubmit = e => {
        e.preventDefault()

        const user = {
            email: email,
            username: username,
            firstName: firstName,
            lastName: lastName,
            password1: password1,
            password2: password2
        }

        fetch('http://localhost:8000/diary/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear()
                    localStorage.setItem('token', data.key)
                    window.location.replace('http://localhost:3000/diary')
                } else {
                    setEmail('')
                    setPassword1('')
                    setPassword2('')
                    localStorage.clear()
                    setErrors(true)
                }
            })
    }

    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            {loading === false && <div className="m-5"> <h1>TrainScape</h1> </div>}

            {errors === true && <h2>Credentials are invalid, unable to register</h2>}

            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <form className="mt-5" onSubmit={onSubmit}>
                    
                    <div class="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input className="form-control" 
                            name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div class="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input className="form-control" 
                            name="username"
                            type="text"
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input className="form-control" 
                            name="firstname"
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input className="form-control"
                            name="lastName"
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)} 
                            required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="password1" className="form-label">Password</label>
                        <input className="form-control"
                            name="password1"
                            type="password"
                            value={password1}
                            onChange={e => setPassword1(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Password verif</label>
                        <input className="form-control"
                            name="password2"
                            type="password"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                
                <div className="mb-3 mt-3">
                        Already have an account? <a href="/login">Log in!</a> 
                </div>

            </div>
        </div>
        
    );
}