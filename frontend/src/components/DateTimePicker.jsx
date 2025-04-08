import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const DateTimePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
        </div>
    );
};

export default DateTimePickerComponent;
