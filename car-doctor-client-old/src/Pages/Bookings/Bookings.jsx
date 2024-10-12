import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {
    const {user} = useContext(AuthContext) ;
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect( () => {
      axios.get(url, {withCredentials : true})
      .then(res => {
        setBookings(res.data)
      })
        // fetch(url)
        // .then(res => res.json()) 
        // .then(data => setBookings(data))
    }, [url])

    const handleConfirm = id => {
      // fetch(`http://localhost:5000/bookings/${id}`, {
      //   method : 'PATCH',
      //   header : {
      //     'content-type' : 'application/json'
      //   },
      //   body : JSON.stringify({status : 'confirm'})
      // })

      axios.patch(`http://localhost:5000/bookings/${id}`, {status : 'confirm'})

      // .then(res => res.json()) 
      .then(data => {
        // console.log(data) ;
        if(data.data.modifiedCount > 0){
          //update state
          const remaining = bookings.filter(booking => booking._id !== id) ;
          const updated = bookings.find(booking => booking._id === id) ;
          updated.status = 'confirm' 
          const newBookings = [updated, ...remaining] ;
          setBookings(newBookings)
        }
      })
    
    }

    return (
        <div>
            <h2 className="text-5xl"> Your Bookings {bookings.length} </h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>CoverImage</th>
        <th>Service Name</th>
        <th>Date</th>
        <th> Price</th>
        <th>More</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookings.map(booking => <BookingRow
        key={booking._id} 
        bookings={bookings}
        booking={booking}
        setBookings={setBookings}
        handleConfirm={handleConfirm}
        >
        </BookingRow>)
     }  
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default Bookings;