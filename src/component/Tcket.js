import React, { useState } from 'react'

const Tcket = (props) => {
    const [ticket, setTicket] = useState({
        movie: localStorage.getItem('moviename'),
        date: '',
        time: '',
        seats: '',
        name: '',
        email: ''
    })
    const onclick = (e) => {
        e.preventDefault();
        localStorage.setItem('ticketbook', JSON.stringify(ticket))
        props.click();
    }
    const onchange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value })
    }

    return (
        <div><div className="container">

            <form>
                <div className="form-group">
                    <label htmlfor="movie">Movie:</label>
                    <input type="text" className="form-control" id="movie" name="movie" value={localStorage.getItem('moviename')} readOnly />
                </div>
                <div className="form-group">
                    <label htmlfor="date">Date:</label>
                    <input type="date" className="form-control" id="date" name="date" value={ticket.date} onChange={onchange} />
                </div>
                <div className="form-group">
                    <label htmlfor="time">Time:</label>
                    <input type="time" className="form-control" id="time" name="time" value={ticket.time} onChange={onchange} />
                </div>
                <div className="form-group">
                    <label htmlfor="seats">Number of Seats:</label>
                    <input type="number" className="form-control" id="seats" name="seats" min="1" max="10" value={ticket.seats} onChange={onchange} />
                </div>
                <div className="form-group">
                    <label htmlfor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={ticket.name} onChange={onchange} />
                </div>
                <div className="form-group">
                    <label htmlfor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={ticket.email} onChange={onchange} />
                </div>
                <button type="submit" onClick={onclick} className="btn btn-primary m-3">Book Ticket</button>
            </form>
        </div>
        </div>
    )
}

export default Tcket