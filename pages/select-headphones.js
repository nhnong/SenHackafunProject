import { useEffect, useState } from 'react';

export default function SelectHeadphones() {
    const [headphones, setHeadphones] = useState([]);

    useEffect(() => {
        fetch('/api/get-headphones')
            .then((response) => response.json())
            .then((data) => setHeadphones(data));
    }, []);

    return (
        <div>
            <h1>Select Your Headphones</h1>
            <label htmlFor="headphones">Choose your headphones:</label>
            <select id="headphones" name="headphones">
                {headphones.map((headphone, index) => (
                    <option key={index} value={headphone}>
                        {headphone}
                    </option>
                ))}
            </select>
        </div>
    );
}
