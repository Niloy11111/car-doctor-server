import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';

const Login = () => {

  const {signInUser, user} = useContext(AuthContext)
  console.log('current' , user)

  const location = useLocation() ;
  const navigate = useNavigate() ;
  
  console.log(location)

  const handleLogin = e => {
    e.preventDefault() ;
    const form = e.target ;
    const name = form.name.value ;
    const email = form.email.value;
    const password = form.password.value ;
    

    signInUser(email, password)
    .then(res => {
      const loggedInUser = res.user ;
      console.log(loggedInUser)
      const user = {email} ;
    
      //get access token 
      axios.post('http://localhost:5000/jwt', user, {
        withCredentials : true 
      })
      
      .then(res => {
        console.log(res.data)
        if(res.data.success){
        navigate(location?.state ? location.state : '/')
        }
      })

    })
    .catch(err => console.log(err))

    
    
}
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="text-center lg:text-left w-1/2 mr-12">
        <img src={img}></img>
     
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl font-bold text-center">Login </h1>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary"  type="submit" value="submit" />
        </div>
      </form>
      <p className='my-4'>New to car Doctors <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;