// pages/api/dog.js
export default function handler(req, res) {
    res.status(200).json([
        { src: '/cats/cat1.jpg', alt: 'cat1', width: 500, height: 500, description: 'these id the description of the 1 cat' },
        { src: '/cats/cat2.jpg', alt: 'cat2', width: 500, height: 500, description: 'these id the description of the 2 cat' },
        { src: '/cats/cat3.jpg', alt: 'cat3', width: 500, height: 500, description: 'these id the description of the 3 cat' },
        { src: '/cats/cat4.jpg', alt: 'cat4', width: 500, height: 500, description: 'these id the description of the 4 cat' },
        { src: '/cats/cat5.jpg', alt: 'cat5', width: 500, height: 500, description: 'these id the description of the 5 cat' },
        { src: '/cats/cat6.jpg', alt: 'cat6', width: 500, height: 500, description: 'these id the description of the 6 cat' },
        { src: '/cats/cat7.jpg', alt: 'cat7', width: 500, height: 500, description: 'these id the description of the 7 cat' }
    ]);
}
