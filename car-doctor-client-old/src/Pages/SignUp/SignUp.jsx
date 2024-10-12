import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext)

    const handleSingUp = e => {
        e.preventDefault() ;
        const form = e.target ;
        const name = form.name.value ;
        const email = form.email.value;
        const password = form.password.value ;

        createUser(email, password)
        .then(res => {
          console.log(res.user)
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


            <form onSubmit={handleSingUp} className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up </h1>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
                <input  className="btn btn-primary"  type="submit" value="sign Up" />
              </div>
            </form>


            <p className='my-4'>Already have an account <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;