import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function HeadphoneDetail() {
    const router = useRouter();
    const { name } = router.query;

    useEffect(() => {
        if (name) {
            fetch(`/measurements/${name}.csv`)
                .then((response) => response.text())
                .then((data) => {
                    setCsvData(data);
                });
        }
    }, [name]);

    if (!name) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Headphone Details for {name}</h1>
            {csvData ? (
                <pre>{csvData}</pre>
            ) : (
                <p>Loading CSV data...</p>
            )}
        </div>
    );
}
