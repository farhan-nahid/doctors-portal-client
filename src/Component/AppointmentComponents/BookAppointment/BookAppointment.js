import React from 'react';
import { Row } from 'react-bootstrap';
import SingleBooking from '../SingleBooking/SingleBooking';

const BookAppointment = ({selectedDate}) => {
    const bookingData = [
        {
            _id: '5e8df50be6e8231764dc23de',
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: '16 Spaces Available'
        },
        {
            _id: '5e8df578e6e8231764dc23df',
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:50 AM - 11:30 AM',
            totalSpace: '8 Spaces Available'
        },
        {
            _id: '5e8df5aee6e8231764dc23e0',
            id: 3,
            subject: 'Teeth Cleaning',
            visitingHour: '5:00 PM - 6:00 PM',
            totalSpace: '10 Spaces Available'
        },
        {
            _id: '5e8df63be6e8231764dc23e1',
            id: 4,
            subject: 'Cavity Protection',
            visitingHour: '7:00 AM - 8:30 AM',
            totalSpace: '6 Spaces Available'
        },
        {
            _id: '5e8df68de6e8231764dc23e2',
            id: 5,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: '18 Spaces Available'
        },
        {
            _id: '5e8df6a0e6e8231764dc23e3',
            id: 6,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: '12 Spaces Available'
        }
    ]

    return (
        <section className="mt-5 pt-5">
            <h3 style={{color:"#17d2bd"}} className="text-center">Available Appointments on {selectedDate.toDateString()}</h3>
                <Row className="mt-5">
                    {
                        bookingData.map(booking =><SingleBooking key={booking.id} booking={booking} selectedDate={selectedDate} />)
                    }
                </Row>
        </section>
    );
};

export default BookAppointment;