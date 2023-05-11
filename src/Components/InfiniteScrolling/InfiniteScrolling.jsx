

import React, { useEffect, useState } from 'react'
import './InfiniteScrolling.css'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'

const InfiniteScrolling = () => {
    const [passengers, setPassengers] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const getPassengersData = async () => {
        setIsLoading(true)
        try {
            const response = await axios
                .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=9`);
            console.log(passengers)
            //Setting what ever data is there in the passengers state keep it and add new data to the state
            setPassengers((prev) => [...prev, ...response.data.data]);
            setIsLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPassengersData()
        console.log(page)
    }, [page])





    const handleScrollEvent = async () => {
        const totalHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        try {
            //Calculating if the inner height and scrollTop values is greater 
            //than equal to totalHeight than we are incrementing the page value by one
            if (innerHeight + scrollTop + 1 >= totalHeight) {
                setPage((prev) => prev + 1)
            }

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        //Calling a function on scroll Event
        window.addEventListener("scroll", handleScrollEvent)
        return () => window.removeEventListener("scroll", handleScrollEvent)
    }, [])





    return (
        <div className='infinite-scrolling'>
            <h2>Passengers Data</h2>
            <div className='inf-container'>
                {
                    passengers && passengers.map((data, index) => {
                        return <div className="content-card" key={data._id}>
                            <div className='card-header'>
                                <h3>{data.name}</h3>
                                <h4>{index + 1}</h4>
                            </div>
                            <div>{data.airline[0].slogan}</div>

                            <p className='trips'>{data.trips}</p>
                        </div>
                    })
                }
            </div>
            <div className='loader'>
                <Bars
                    height="80"
                    width="80"
                    color="#F09667"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={isLoading}
                />
            </div>
        </div>
    )
}

export default InfiniteScrolling

