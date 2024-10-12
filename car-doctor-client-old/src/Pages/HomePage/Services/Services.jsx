// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Service from "./Service";


const Services = () => {

    // const [Services, setServices] = useState([])

    // useEffect( () => {
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])
    const {data : services} = useQuery({
        queryKey : ['services'],
        queryFn : async () => {
            const res = await fetch('http://localhost:5000/services') ;
            return res.json() ;
        }
    })
    return (
        <div>
            <h2 className="text-3xl text-center"> Our Services</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    services?.map(service => <Service
                   service={service}
                   key={service.id}
                    >

                    </Service> )
                }
            </div>


            
        </div>
    );
};

export default Services;