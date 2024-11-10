import React from 'react'
import './Profile.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Profile = ({ information, onInformationChange, step, setStep, pageName }) => {
    const totalSteps = 3;

    const borderRadius = step === totalSteps ? '0' : '0 10rem 10rem 0';


    return (
        <>
            <div className='user-settings'>
                {pageName.map((item, index) => (
                    <div
                        name='userInfo'
                        key={item}
                        className={`user-setting tab-${index + 1} ${step >= index + 1 ? 'active' : ''}`}
                        style={{
                            borderRadius: information.userInfo === item ? borderRadius : ''
                        }}
                    ><span className='index-design'>{index + 1}</span>
                        {item}
                    </div>
                ))}
            </div>
            {step === 1 && (
                <ProfileInfo information={information} onInformationChange={onInformationChange} />
            )}

            {step === 2 && (
                <BusinessInfo information={information} onInformationChange={onInformationChange} />

            )}

        </>
    )
}

export default Profile