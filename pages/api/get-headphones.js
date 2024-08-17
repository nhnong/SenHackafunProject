import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const measurementsDir = path.join(process.cwd(), 'public/measurements');
    const filenames = fs.readdirSync(measurementsDir);
    const headphones = filenames.map(filename => filename.replace('.csv', ''));

    res.status(200).json(headphones);
}
