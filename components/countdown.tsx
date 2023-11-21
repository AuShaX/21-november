import React, { useEffect, useState } from 'react';
import { format, differenceInMilliseconds } from 'date-fns';

const Countdown = ({ targetDate }: any) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = differenceInMilliseconds(new Date(targetDate), new Date());
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center mt-2 mx-20">
            <div className="flex items-center justify-center space-x-4 mt-5 mb-4">
                <div className="flex items-center">
                    <span className="text-4xl font-medium">39</span>
                    <span className="text-lg text-gray-500 p-2">days</span>
                </div>
                <div className="flex items-center">
                    <span className="text-4xl font-medium">0</span>
                    <span className="text-lg text-gray-500 p-2">hrs</span>
                </div>
                <div className="flex items-center">
                    <span className="text-4xl font-medium">0</span>
                    <span className="text-lg text-gray-500 p-2">mins</span>
                </div>
                <div className="flex items-center">
                    <span className="text-4xl font-medium">0</span>
                    <span className="text-lg text-gray-500 p-2">secs</span>
                </div>
            </div>
            

            {/* 
                {timeLeft.days}
                {timeLeft.hours}
                {timeLeft.minutes}
                {timeLeft.seconds}

            */}
            {/* <section>
        <div className="wrapper">
          <h2>{timeLeft.days}</h2>
          <h6>Days</h6>
        </div>
        <div className="wrapper">
          <h2>{timeLeft.hours}</h2>
          <h6>Hours</h6>
        </div>
        <div className="wrapper">
          <h2>{timeLeft.minutes}</h2>
          <h6>Minutes</h6>
        </div>
        <div className="wrapper">
          <h2>{timeLeft.seconds}</h2>
          <h6>Seconds</h6>
        </div>
      </section> */}
        </div>
    );
};

export default Countdown;