import { useEffect, useState } from 'react';

export default function SelectHeadphones() {
    const [headphones, setHeadphones] = useState([]);
    const [filteredHeadphones, setFilteredHeadphones] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/api/get-headphones')
            .then((response) => response.json())
            .then((data) => {
                setHeadphones(data);
                setFilteredHeadphones(data);
            });
    }, []);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = headphones.filter((headphone) =>
            headphone.toLowerCase().includes(term)
        );
        setFilteredHeadphones(filtered);
    };

    return (
        <div>
            <h1>Select Your Headphones</h1>
            <label htmlFor="headphone-search">Search your headphones:</label>
            <input
                type="text"
                id="headphone-search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Type to search..."
            />
            <br />
            <label htmlFor="headphones">Choose your headphones:</label>
            <select id="headphones" name="headphones">
                {filteredHeadphones.map((headphone, index) => (
                    <option key={index} value={headphone}>
                        {headphone}
                    </option>
                ))}
            </select>
        </div>
    );
}
