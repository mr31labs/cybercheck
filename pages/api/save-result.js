import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Define the data directory
    const dataDir = path.join(process.cwd(), 'data');

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    if (req.method === 'POST') {
        try {
            const { type, score, maxScore, answers, timestamp } = req.body;
            const now = new Date();
            const timeString = now.toISOString().replace(/[:.]/g, '-'); // Sanitize for filename

            // Construct filename: assessment-<type>-<timestamp>.json
            // If type is 'kids', it will be: assessment-kids-<timestamp>.json
            const filenameTag = type === 'kids' ? 'kids' : type;
            const filename = `assessment-${filenameTag}-${timeString}.json`;
            const filePath = path.join(dataDir, filename);

            const newEntry = {
                id: now.getTime().toString(),
                filename: filename, // Include filename as requested
                type,
                score,
                maxScore,
                percentage: Math.round((score / maxScore) * 100),
                timestamp: timestamp || now.toISOString(),
                answers // Includes questions and selected answers
            };

            // Write to a new unique file
            fs.writeFileSync(filePath, JSON.stringify(newEntry, null, 2));

            res.status(200).json({ message: 'Success', filename: filename, id: newEntry.id });
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
