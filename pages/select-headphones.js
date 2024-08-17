import fs from 'fs';
import path from 'path';
import { useEffect } from 'react';

export async function getStaticProps() {
    const measurementsDir = path.join(process.cwd(), 'public/measurements');
    const filenames = fs.readdirSync(measurementsDir);

    return {
        props: {
            headphones: filenames.map(filename => filename.replace('.csv', '')),
        },
    };
}

export default function SelectHeadphones({ headphones }) {
    useEffect(() => {
        const dropdown = document.getElementById('headphones');
        headphones.forEach((headphone) => {
            const option = document.createElement('option');
            option.value = headphone;
            option.text = headphone;
            dropdown.appendChild(option);
        });
    }, [headphones]);

    return (
        <html>
            <head>
                <title>Select Your Headphones</title>
            </head>
            <body>
                <h1>Select Your Headphones</h1>
                <label htmlFor="headphones">Choose your headphones:</label>
                <select id="headphones" name="headphones">
                </select>
            </body>
        </html>
    );
}
