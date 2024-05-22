const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;


const KINOPOISK_API_KEY = 'YJZ32FR-6TEMK70-J3WYFNX-10DTGKB';

app.use(cors());
app.use(express.json());

app.get('/api/movies', async (req, res) => {
    try {
        const response = await axios.get('https://api.kinopoisk.dev/movie?search=spider-man&field=name', {
            headers: {
                'X-API-KEY': KINOPOISK_API_KEY,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Kinopoisk API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Kinopoisk API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
