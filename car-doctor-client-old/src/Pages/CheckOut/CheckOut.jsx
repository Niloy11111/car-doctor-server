import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData() ;
    const {title, _id, price, img} = service ;
    const {user} = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault() ;
        const form = e.target ;
        const name = form.name.value ;
        const date = form.date.value ;
        const email = user?.email ;
        const booking = {
            customerName : name ,
            email,
            img,
            date, 
            service : title ,
            service_id : _id ,
            price : price 
        }
       
        fetch('http://localhost:5000/bookings', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('service book successfull') ;
            }
        })

    }


    return (
        <div>
            <h2 className="text-center text-3xl">Book service : {title} </h2>
          
      <form onSubmit={handleBookService} className="card-body">
     <div className="flex gap-6">
     <div className="flex-1">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.name} placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="Date" className="input input-bordered" required />  
        </div>
      </div>
      <div className="flex-1">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" defaultValue={price} placeholder="price" className="input input-bordered" required />  
        </div>
      </div>
     </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="ORDER CONFIRM" />
        </div>
      </form>
    </div>
  
    );
};

export default CheckOut;