import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import './Mytrip.css';
import { Link } from 'react-router-dom';


const img = require('../assets/images/fmt-cover.jpg');

const Mytrip = () => {
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [openCreateAccountModal, setOpenCreateAccountModal] = useState(false);

    const handleSignInClick = () => {
        setOpenSignInModal(true);
    };

    const handleCreateAccountClick = () => {
        setOpenCreateAccountModal(true);
    };

    return (
        <div className='mytrip-main-container'>
            <div className="mytrip-semi-main-container">
                <div className="mytrip-container">
                    <div className="mytrip-left-container">
                        <img className='mytrip-img' src={img} alt="" />
                    </div>
                    <div className="mytrip-right-container">
                        <div className="mytrip-header">
                            <h1>Find my Booking</h1>
                        </div>
                        <div className="mytrip-para">
                            <ul>
                                <li className='mytrip-li'>The Order ID can be found in your booking confirmation email or e-Ticket</li>
                                <li className='mytrip-li'>The last name should belong to one of the passengers from the booking.</li>
                            </ul>
                        </div>
                        <form className='mytrip-form' action="">
                            <div className="max-w-sm">
                                <div className="mb-2 block">
                                    <label htmlFor="orderId" className="custom-label block text-gray-700 text-sm font-bold mb-2">Order Id</label>
                                </div>
                                <input id="orderId" className="custom-width-input py-4 px-3 text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Wxxxxxx" required />
                            </div>
                            <div className="max-w-sm">
                                <div className="mb-2 block">
                                    <label htmlFor="orderId" className="custom-label block text-gray-700 text-sm font-bold mb-2">Passenger`s last name</label>
                                </div>
                                <input id="orderId" className="shadow appearance-none border rounded custom-width-input py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name" required />
                            </div>
                            <div className="max-w-sm">
                                <div className="mb-2 block">
                                    <label htmlFor="orderId" className="custom-label block text-gray-700 text-sm font-bold mb-2">Contact Email</label>
                                </div>
                                <input id="orderId" className="shadow appearance-none border rounded custom-width-input py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" required />
                            </div>
                            <button className='my-trip-btn'>Continue</button>
                        </form>
                        <p className='mytrip-p'>Have an account? <button onClick={handleSignInClick} className='mytrip-link'>Sign In</button></p>
                    </div>
                    <Modal show={openSignInModal} size="sm" popup onClose={() => setOpenSignInModal(false)} >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign In</h3>

                                <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300">
                                    New User?&nbsp;
                                    <button onClick={handleCreateAccountClick} className="text-cyan-700 hover:underline dark:text-cyan-500">
                                        Create account
                                    </button>
                                </div>

                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email" value="Email" />
                                    </div>
                                    <TextInput id="email" width={'60%'} placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password" value="Password" />
                                    </div>
                                    <TextInput id="password" type="password" placeholder="Password" required />
                                </div>
                                <div className="flex justify-between">

                                    <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                        Forget Password?
                                    </a>
                                </div>
                                <div className="w-full">
                                    <Button className='my-trip-model-btn'>Continue</Button>
                                </div>

                            </div>

                            <div className="model-paragraph">
                                <p className='model-p'>By creating new account I accept the <Link className='mytrip-link'>Terms and Conditions</Link>and the <Link className='mytrip-link'> Privacy Policy</Link></p>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal show={openCreateAccountModal} size="sm" popup onClose={() => setOpenCreateAccountModal(false)} >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Register new user</h3>

                                <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Already have an account?&nbsp;
                                    <button onClick={() => setOpenCreateAccountModal(false)} className="text-cyan-700 hover:underline dark:text-cyan-500">
                                        Sign In
                                    </button>
                                </div>

                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email" value="Email" />
                                    </div>
                                    <TextInput id="email" width={'60%'} placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password" value="Password" />
                                    </div>
                                    <TextInput id="password" type="password" placeholder="Password" required />
                                </div>
                                <div className="flex justify-between">

                                    <div className=" text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                        <ul className="second-model-ul" >
                                            <div className="first-li">
                                                <li className='model-li'>1 lowercase character</li>
                                                <li className='model-li'>1 number</li>
                                            </div>
                                            <div className="second-li">
                                                <li className='model-li'>1 uppercase character</li>
                                                <li className='model-li'>8 characters min.</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Button className='my-trip-model-btn'>Create Account</Button>
                                </div>

                            </div>

                            <div className="model-paragraph">
                                <p className='model-p'>By creating new account I accept the <Link className='mytrip-link'>Terms and Conditions</Link>and the <Link className='mytrip-link'> Privacy Policy</Link></p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div >
    );
};

export default Mytrip;
