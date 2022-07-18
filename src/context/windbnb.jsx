import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const WindbnbContext = createContext({});

const WindbnbProvider = ({ children }) => {

    const [modal, setModal] = useState(false);

    const [stays, setStays] = useState([]);
    const [country, setCountry] = useState("Finland");
    const [contries, setContries] = useState(['Helsinki, Finland', 'Turku, Finland', 'Oulu, Finland', 'Vaasa, Finland']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setModal(false);
            axios.get("../stays.json")
                .then(res => {
                    setStays(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                })

        }, 1000);
        return () => clearTimeout(timer);
    }, []);




    const toggleModal = (local) => {
        let valueModal = !modal;
        setModal(valueModal);
    }

    const filterStays = (value, guest) => {

        let newCountry = value.split(",")[1];
        let newCity = value.split(",")[0];
        let newStays = [];

        if (newCity) {

            axios.get("../stays.json")
                .then(res => {
                    newStays = res.data.filter(stay => {
                        return stay.city.toLowerCase() === newCity.toLowerCase().trim() || stay.country.toLowerCase() === newCity.toLowerCase().trim() && stay.maxGuests >= guest;
                    })
                    setStays(newStays);

                })
                .catch(err => {
                    console.log(err);
                })

        }

        if (newCountry) {
            axios.get("../stays.json")
                .then(res => {
                    newStays = res.data.filter(stay => {
                        return stay.country.toLowerCase() === newCountry.toLowerCase().trim() && stay.city.toLowerCase() === newCity.toLowerCase().trim() && stay.maxGuests >= guest;
                    })
                    setStays(newStays);
                }).catch(err => {
                    console.log(err);
                })
        }




    }

    return (
        <WindbnbContext.Provider value={{
            modal, toggleModal,
            stays, setStays,
            country, setCountry,
            contries, setContries,
            loading, setLoading,
            filterStays
        }}>
            {children}
        </WindbnbContext.Provider>
    );

}


export default WindbnbProvider;