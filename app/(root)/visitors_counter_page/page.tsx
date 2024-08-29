"use client";

import React, { useEffect, useState } from 'react';

const VisitorsCounterPage = () => {
    const [visitorCount, setVisitorCount] = useState<number>(0);

    useEffect(() => {
        // Get the visitor count from localStorage
        const storedVisitorCount = JSON.parse(localStorage.getItem("visitorCount") || "0");
        setVisitorCount(storedVisitorCount);
    }, []);

    return (
        <div>
            <h1 className='text-center'>Total Visitors: {visitorCount}</h1>
        </div>
    );
};

export default VisitorsCounterPage;
