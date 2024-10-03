"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CircularCard, { Circular } from '@/component/Circular/CircularCard';

// Circular interface defined here...
interface CircularResponse {
    Circulars?: Circular[];
}
const CircularsComponent = () => {
    const { isLoading, isError, error, data } = useQuery<CircularResponse>({
        queryKey: ['repoData'],
        queryFn: async () => {
            const response = await axios.get('https://greendesks.in/gstlaws/api/circulars.php');
            return response.data;
        },
    });

    if (isLoading) return <div>Loading...</div>;

    if (isError) {
        const errorMessage = axios.isAxiosError(error) && error.response
            ? `Error: ${error.response.status} - ${error.response.data.message || error.message}`
            : 'An unexpected error occurred.';
        return <div>{errorMessage}</div>;
    }

    const circulars = data?.Circulars || [];

    if (circulars.length === 0) {
        return <div>No circulars found.</div>;
    }

    return (
        <div className="flex flex-wrap justify-center">
            <h1 className="text-2xl font-bold mb-4">Circulars</h1>
            {circulars.map((circular:Circular) => (
                <CircularCard key={circular.CircularID} circular={circular} />
            ))}
        </div>
    );
};

export default CircularsComponent;
