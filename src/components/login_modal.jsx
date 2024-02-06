import React, { useState, useEffect } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'demo' && password === 'password') {
            setError('');
            onClose();
        } 
        else {
            setError('Invalid username or password. Please try again.');
        }
    };

    useEffect(() => {
    }, [isOpen]);

    return (
        <div className={`modal ${isOpen ? 'block z-50 absolute' : 'hidden'}`}>
            <div className="fixed inset-0 bg-gray-500  bg-opacity-75 blur" onClick={onClose}></div>
            <div className="fixed bg-white rounded-lg mx-auto my-16 w-1/3 h-4/6 inset-0 flex justify-center items-center">
                <form>
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">Username</label>
                        <input type="text" id="username" className="w-full border border-gray-400 rounded px-3 py-2"
                               value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" id="password" className="w-full border border-gray-400 rounded px-3 py-2"
                               value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex justify-end">
                        <button className="bg-yellow rounded px-4 py-2" onClick={e=>{e.preventDefault(), handleLogin()}}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;

