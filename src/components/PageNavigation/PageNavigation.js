import React, { useEffect, useState } from 'react'
import './PageNavigation.css'
import Profile from '../Profile/Profile';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const PageNavigation = () => {

    const [information, setInformation] = useState(() => {
        const savedData = localStorage.getItem('savedInfo');
        return savedData
            ? JSON.parse(savedData)
            : {
                userInfo: 'Your Profile',
                fName: '',
                lName: '',
                email: '',
                phone: '',
                password: '',
                cnfPassword: '',

                brandName: '',
                brandType: '',
                street: '',
                city: '',
                zip: '',
                taxId: '',
            };
    });


    const [step, setStep] = useState(1)
    const [pageName, setPageName] = useState(['Your Profile', 'Business Information', 'Additional Users'])
    const totalPages = 3

    const handleBack = () => {

        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleNext = () => {
        if (step === 1) {
            const { fName, lName, email, phone, password, cnfPassword } = information;

            if (!fName || !lName || !email || !phone || !password || !cnfPassword) {
                alert('Please fill in all the details');
                return;
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                alert('Enter a valid email');
                return;
            }

            if (phone.length !== 10) {
                alert('Phone number must be 10 digits');
                return;
            }

            if (password.length <= 10) {
                alert('Password must be more than 10 characters');
                return;
            }

            if (password !== cnfPassword) {
                alert('Passwords do not match');
                return;
            }
        }

        if (step === 2) {
            const { brandName, brandType, street, city, zip, taxId } = information
            if (!brandName || !brandType || !street || !city || !zip || !taxId) {
                alert('Please fill in all the details');
                return;
            }
            if (city.length < 2) {
                alert('City name should be at least 2 characters long');
                return;
            }

            if (!/^\d{6}$/.test(zip)) {
                alert('ZIP Code should be a 6-digit number');
                return;
            }

            if (!/^\d{9}$/.test(taxId)) {
                alert('Tax ID should be a 9-digit number');
                return;
            }
        }
        if (step <= totalPages) {
            setStep(step + 1);
        }
    };

    const handleInfoChange = (data) => {
        setInformation((prevData) => ({ ...prevData, ...data }))
    }


    useEffect(() => {
        if (information) {
            localStorage.setItem('savedInfo', JSON.stringify(information));
        }
    }, [information]);

    useEffect(() => {
        handleInfoChange({ userInfo: pageName[step - 1] });
        console.log(pageName[step - 1], step)
    }, [step])


    return (
        <>
            <div className='parent-container'>

                <div className='headings'>
                    <div className='header'>Create New Account</div>
                    <div className='contact'>Contact Us</div>
                </div>

                <div className='content-body'>
                    <div className='content'>
                        <Profile
                            information={information}
                            onInformationChange={handleInfoChange}
                            step={step}
                            setStep={setStep}
                            pageName={pageName}
                        />

                    </div>
                    <div className='footer'>
                        <button className='back'>&lt; Back to Login</button>
                        <div>
                            {step > 1 && (
                                <button type='submit' className='previous' onClick={handleBack}>&lt; Previous Step</button>)}
                            <button type='submit' className='next' onClick={handleNext}>Next Step &gt;</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PageNavigation