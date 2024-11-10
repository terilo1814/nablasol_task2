import React from 'react'
import './ProfileInfo.css'

const ProfileInfo = ({ information, onInformationChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        onInformationChange({ [name]: value })
    }

    return (
        <>
            <div className='heading-section'>
                <p className='step-heading'>Step1</p>
                <p className='profile-heading'>Your Profile</p>
                <p className='desc-heading'>Enter the login information for your account. You will be able to create additional users after registering</p>
            </div>


            <div className='sections'>
                <div className='section'>
                    <label>First Name</label>
                    <input type='text'
                        value={information.fName}
                        name='fName'
                        onChange={handleChange}
                        placeholder='Input your first name'
                    />
                </div>

                <div className='section'>
                    <label>Last Name</label>
                    <input type='text'
                        value={information.lName}
                        name='lName'
                        onChange={handleChange}
                        placeholder='Input your last name'
                    />
                </div>

                <div className='section'>
                    <label>Email</label>
                    <input type='email'
                        value={information.email}
                        name='email'
                        onChange={handleChange}
                        placeholder='Input your Email'
                    />
                </div>

                <div className='section'>
                    <label>Phone Number</label>
                    <input type='text'
                        value={information.phone}
                        name='phone'
                        onChange={handleChange}
                        placeholder='Input your Phone Number'
                    />
                </div>

                <div className='section'>
                    <label>Password</label>
                    <input type='password'
                        value={information.password}
                        name='password'
                        onChange={handleChange}
                        placeholder='Create Password'
                    />
                </div>

                <div className='section'>
                    <label>Confirm Password</label>
                    <input type='password'
                        value={information.cnfPassword}
                        name='cnfPassword'
                        onChange={handleChange}
                        placeholder='Confirm your Password'
                    />
                </div>
            </div>

        </>
    )
}

export default ProfileInfo