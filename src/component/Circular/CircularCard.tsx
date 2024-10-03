// CircularCard.tsx
"use client "
import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import dayjs from 'dayjs';

export interface Circular {
    CircularID?: string;
    CircularNumber?: string;
    CircularTopic?: string;
    CircularDate?: string;
    UserID?: string;
    RefNo?: string;
    Year?: string;
    Volume?: string;
    Journal?: string;
    Type?: string | null;
    Page?: string;
    CircularText?: string;
    CircularState?: string;
    Keyword?: string;
    FileName?: string | null;
}

const CircularCard: React.FC<{ circular: Circular }> = ({ circular }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(prev => !prev);
    };

    return (
        <div className='container mx-auto'>
            <div className="border border-gray-300 rounded-md p-4 shadow-md m-2">
                <h2 className="text-lg font-semibold cursor-pointer" onClick={toggleDetails}>
                    {circular.CircularNumber || 'No Number'}
                </h2>
                <p
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(circular.CircularTopic || 'No Topic') }}
                    className="text-gray-700 my-2"
                />
                <p className="text-gray-500">
                    Date: {circular.CircularDate ? dayjs(circular.CircularDate).format('DD/MM/YYYY') : 'No Date'}
                </p>
                <button onClick={toggleDetails}
                className='px-2 py-2 flex items-center justify-center rounded-full bg-red-800 text-white hover:bg-white hover:text-red-800  hover:border-2 hover:border-red-800 transition ease-in-out duration-300 delay-100'
                >
                        Read More
                </button>
                {/* Show details if toggled */}
                {showDetails && (
                    <div className="container mx-auto  ">
                       <div className='text-center'>
                       <p> {circular.UserID || 'N/A'}</p>
                        <p>{circular.RefNo || 'N/A'}</p>
                        <p>{circular.Year || 'N/A'}</p>
                        <p>{circular.Volume || 'N/A'}</p>
                        <p> {circular.Journal || 'N/A'}</p>
                        <p> {circular.Type || 'N/A'}</p>
                        <p> {circular.Page || 'N/A'}</p>
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(circular.CircularTopic || 'No Topic') }} />
                        <p> {circular.CircularState || 'N/A'}</p>
                        <p> {circular.Keyword || 'N/A'}</p>
                        <p> {circular.FileName || 'N/A'}</p>
                       </div>
                    </div>
                )}
            </div></div>
    );
};

export default CircularCard;
