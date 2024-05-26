import React, { useEffect } from 'react';

export default function Terms() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app.termly.io/embed-policy.min.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <div name="termly-embed" data-id="9e4e0816-e543-48b0-ba41-f2c1ad7c3132" data-type="iframe" />
            <div name="termly-embed" data-id="40e1b620-fdde-4f5b-a31b-4e887fb8a8b0" data-type="iframe" />
            <div name="termly-embed" data-id="616a4061-3c2d-48c0-a74d-124abef5175b" data-type="iframe" />
            <div name="termly-embed" data-id="4c6b8075-c5be-4954-a506-d34ddc8e8a81" data-type="iframe" />
            <div name="termly-embed" data-id="26e9d6b6-8433-461b-bda9-83e43eed5357" data-type="iframe" />
            <div name="termly-embed" data-id="09e7a5f2-c560-48ab-9ba2-7a6f6f2d1044" data-type="iframe" />
        </>
    );
}
