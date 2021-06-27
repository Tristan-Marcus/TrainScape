import React from 'react'

import { Navbar } from '../Navbar/Navbar';
import { ProfilePanel } from './ProfilePanel';

export function Profile() {

    return (
        <div>
            <Navbar />

            <div className="mt-5 d-flex align-items-center justify-content-around">

                <ProfilePanel />

                <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                    <form className="mt-5">

                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
                            <div id="nameHelp" class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputName2" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputName2" aria-describedby="nameHelp"/>
                            <div id="nameHelp" class="form-text"></div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        
                        
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>

                    <div className="mt-5">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            ON
                        </label>

                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            OFF
                        </label>
                    </div>

                </div>
            </div>

        </div>
        
        
    );
}