// fileUpload.js

import multer, { diskStorage } from 'multer';
import { extname } from 'path';

// Set up storage for multer
const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/'); // Specify the destination directory
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const extension = extname(file.originalname);
    const uniqueFilename = `${timestamp}${extension}`;
    cb(null, uniqueFilename); // Specify the file name
  },
});

const upload = multer({ storage: storage });

export default upload;
