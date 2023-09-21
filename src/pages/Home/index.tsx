import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
        // try {
        //     let res = await axios.get('/my-api-route');
        
        //     // Work with the response...
        // } catch (err) {
        //     if (err.response) {
        //         // The client was given an error response (5xx, 4xx)
        //         console.log(err.response.data);
        //         console.log(err.response.status);
        //         console.log(err.response.headers);
        //     } else if (err.request) {
        //         // The client never received a response, and the request was never left
        //     } else {
        //         // Anything else
        //     }
        // }
    })

    return <div>Home Page</div>
}

export default Home;