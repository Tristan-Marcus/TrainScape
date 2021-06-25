import React from 'react'

export function Login() {


    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            <div className="m-5">
                <h1>TrainScape</h1>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <form className="mt-5">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text"></div>
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Log In</button>
                </form>
                
                <div class="mb-3">
                        Don't have an account? <a href="/register">Sign Up!</a> 
                </div>

            </div>
        </div>
        
        
    );
}