import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {_id , title, img,price} = service
    return (
        <div className="border p-6">
            <img className="h-[300px]" src={img}></img>
            <h2>{title}</h2>
            <p>{price}</p>
            <div>
             <Link to={`/checkout/${_id}`}>
             <button className="bg-red-200 px-6 py-3">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Service;