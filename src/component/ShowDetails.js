import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Modal from './Modal';

const ShowDetails = (props) => {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((data) => {

                setShows(data);

            });
    }, []);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const receivedState = Object.fromEntries(queryParams.entries());
    return (
        <>
            {

                // eslint-disable-next-line array-callback-return
                shows.map((show) => {
                    if (show.show.id === Number(receivedState.id)) {
                        localStorage.setItem('moviename', show.show.name)
                        return (
                            <div className="container mt-3 " key={show.show.id} style={{ maxHeight: '100vh' }}>
                                <h1 className='text-center fw-bolder'>{show.show.name}</h1>
                                <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
                                    <div className='' style={{
                                        width: '300px',
                                        height: '400px'
                                    }} >

                                        <img src={show.show.image.original} style={{
                                            width: '300px',
                                            height: '400px'
                                        }} className=' object-fit-cover border rounded' alt="" />
                                    </div>
                                    <div className=' summery-box'>
                                        <p className="card-text "><div className='fw-bolder fs-5'>Summary:</div>{show.show.summary}</p>
                                        <p className="card-text m-2"><span className='fw-bolder'>Network:</span>{`${show.show.network !== null ? show.show.network.name : 'undefined'}`}</p>
                                        <p className="card-text m-2"><span className='fw-bolder'>Genres:</span>{`${show.show.genres[0]} | ${show.show.genres[1]}`}</p>
                                        <p className="card-text m-2"><span className='fw-bolder'>URL:</span><Link target='_blank' to={show.show.url}>{show.show.url}</Link></p>
                                        <p className="card-text m-2 d-flex  align-items-center">
                                            <span className='fw-bolder'>Rating:</span>
                                            <span>{`${show.show.rating.average ? ` ${show.show.rating.average}/10` : 'Not available'}`}</span>
                                        </p>
                                        <button onClick={props.click} type="button" className="btn btn-primary">Book Ticket</button>
                                    </div>

                                </div>
                            </div>

                        )
                    }

                })


            }
            <Modal show={props.show} click={props.click} />
        </>
    );
};

export default ShowDetails;



// {/* <ShowDetailsContainer>
// <h1>Show Details</h1>
// <ShowTitle>{show.name}</ShowTitle>
// <ShowSummary>{show.summary}</ShowSummary>
// <BookTicketButton onClick={() => onBookTicket(show)}>
//     Book Ticket
// </BookTicketButton>
// </ShowDetailsContainer> */}