import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/home');
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <div className="min-h-screen">
            <div className="hero-content flex-col flex">
                <h1 className="text-5xl font-bold">Login now!</h1>
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                {/* email  */}
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />

                                {/* Password  */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required />

                                <div><a className="link link-hover">Forgot password?</a></div>
                               
                                <button className="btn btn-neutral mt-4" type='submit'>Login</button>
                                <p className='mt-4'>Don't Have An Account ? <Link to="/auth/register" className='text-red-400'>Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;