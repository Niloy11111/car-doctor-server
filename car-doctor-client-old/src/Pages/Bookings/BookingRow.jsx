import axios from "axios";


const BookingRow = ({booking, bookings, setBookings, handleConfirm }) => {
    const {customerName, _id , date, price, email,img, service, status} = booking ; 
    
  
    const handleDelete = id => {

        const proceed = confirm('are you sure')
        if(proceed){

            // fetch(`http://localhost:5000/bookings/${id}`, {
            //     method : 'DELETE',
            // })
            // .then(res => res.json())
            axios.delete(`http://localhost:5000/bookings/${id}`)

            .then(data => {
                console.log(data)
               if(data.data.deletedCount > 0){
                const remainingBooking = bookings.filter( booking =>  booking._id !== id )
                setBookings(remainingBooking)
              
               }
            })
           
        }
    }
     return (
        <tr>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded w-12 h-12">
               {
                img && <img src={img} />
               } 
              </div>
            </div>
          
          </div>
        </td>
        <td>
        {service}
        </td> 
        <td> {date}</td>
        <td> ${price}</td>
        <th>
         {
          status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : 
          <button onClick={() => handleConfirm(_id) } className="btn btn-ghost btn-xs">Confirm</button>
         }
        </th>
      </tr>
     
    );
};

export default BookingRow;