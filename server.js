import path from 'path';
import express from 'express';

const app = express();
const PORT = 3000;

const __dirname = path.resolve();

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function (err) {
    if (err) {
        console.error('Failed to start the server:', err);
    } else {
        console.log(`Server is running on port: ${PORT}`);
    }
});
