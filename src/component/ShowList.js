import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ShowList = () => {
    const [shows, setShows] = useState([]);
    const id = (id) => {
        const stateToPass = {
            id: id,
        };
        const queryParams = new URLSearchParams(stateToPass).toString();

        const url = `/showdetails?${queryParams}`;
        return url;
    }



    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((data) => {
                setShows(data);
            });
    }, []);

    return (
        <>
            <div>
                <h1 style={{
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'black',
                    padding: '10px',
                    borderRadius: '10px',
                    margin: '10px'

                }}>TV Shows</h1>
                <div className="container">

                    {
                        shows.map((show) => {
                            return (
                                <div className="card mb-3 container shadow" key={show.show.id} style={{ maxWidth: '640px' }}>
                                    <div className="row g-0">
                                        <div className="col-sm-3 col">
                                            <img src={show.show.image.medium} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-sm-9 col ">
                                            <div className="card-body">
                                                <h3 className="card-title">{show.show.name}</h3>
                                                <div className="info">
                                                    <p className="card-text m-0"><small className=""><span className='fw-bolder'>Network:</span>{`${show.show.network !== null ? show.show.network.name : 'undefined'} (${show.show.premiered})`}</small></p>
                                                    <p className="card-text m-0"><small className=""><span className='fw-bolder'>Language:</span>{show.show.language}</small></p>
                                                    <p className="card-text m-0"><small className=""><span className='fw-bolder'>Schedule:</span>{`${show.show.schedule.days[0]} at ${show.show.schedule.time}(${show.show.averageRuntime}min)`}</small></p>
                                                    <p className="card-text m-0"><small className=""><span className='fw-bolder'>Status:</span>{`${show.show.status}`}</small></p>
                                                    <p className="card-text m-0"><small className=""><span className='fw-bolder'>Genres:</span>{`${show.show.genres[0]} | ${show.show.genres[1]}`}</small></p>
                                                    <p className="card-text m-0 d-flex align-items-center">
                                                        <span className='fw-bolder'>Rating:</span>
                                                        <span>{`${show.show.rating.average ? ` ${show.show.rating.average}/10` : 'Not available'}`}</span>
                                                    </p>


                                                </div>
                                                <div className='mt-2'>
                                                    <Link to={id(show.show.id)} className="btn btn-primary" >For More</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })

                    }
                </div>
            </div>
        </>

    );
};

export default ShowList;






// <ShowListContainer>
        //     <h1>TV Shows</h1>
        //     {shows.map((show) => (
        //         <ShowCard key={show.show.id}>
        //             <ShowTitle>{show.show.name}</ShowTitle>
        //             <ShowSummary>{show.show.summary}</ShowSummary>
        //             <ShowButton onClick={() => onSelectShow(show.show)}>
        //                 Show Details
        //             </ShowButton>
        //         </ShowCard>
        //     ))}
        // </ShowListContainer>
    //     <div className="progressbar">
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    //     <span className="star">&#9733;</span>
    // </div>