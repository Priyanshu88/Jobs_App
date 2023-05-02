/** @format */

import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'e95c3ae468msh96f4959f8c96aa5p17bf2bjsnc3c37a6c38ee',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
		params: { ...query },
	};

	
    const fetchData = async () => { 
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) { 
            setError(error);
            console.log(error);
            alert("There was an error fetching the data. Please try again later.")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    const refetch = () => { 
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch};
};

export default useFetch;