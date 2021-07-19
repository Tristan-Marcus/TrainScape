import React, { useState, useEffect } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

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
            password: password
        }

        fetch('http://localhost:8000/diary/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    window.location.replace('http://localhost:3000/diary')
                } else {
                    setEmail('')
                    setPassword('')
                    localStorage.clear()
                    setErrors(true)
                }
            })
    }

    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            { loading === false && <div className="m-5"> <h1>TrainScape</h1> </div> }

            {errors === true && <h2> Invalid Credentials </h2>}

            {loading === false && (
                <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                    <form className="mt-5" onSubmit={onSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input className="form-control" 
                                name='email' 
                                type="email" 
                                value={email} 
                                required
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control" 
                                name="password" 
                                type="password" 
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </form>
                    
                    <div className="mb-3">
                            Don't have an account? <a href="/register">Sign Up!</a> 
                    </div>

                </div>
            )}

        </div>
        
        
    );
}