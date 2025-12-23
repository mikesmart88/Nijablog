import { useEffect, useState } from "react";

export default function UseIpLocation() {

    const [location, setlocation] = useState('');
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try{
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                setlocation({
                    ip: data.ip,
                    country: data.country_name,
                });
            }catch (err){
                seterror('Falied to fetch IP info');
            }finally{
                setloading(false)
            }
        };
        fetchLocation();
    }, [])

    return {location, loading, error};
};