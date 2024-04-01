// pages/api/dog.js
export default function handler(req, res) {
    res.status(200).json([
        { src: '/cats/cat1.jpg', alt: 'cat', width: 500, height: 500 },
        { src: '/cats/cat2.jpg', alt: 'cat', width: 500, height: 500 },
        { src: '/cats/cat3.jpg', alt: 'cat', width: 500, height: 500 },
        { src: '/cats/cat4.jpg', alt: 'cat', width: 500, height: 500 },
        { src: '/cats/cat5.jpg', alt: 'cat', width: 500, height: 500 },
        { src: '/cats/cat6.jpg', alt: 'cat', width: 500, height: 500 },
        { src: '/cats/cat7.jpg', alt: 'cat', width: 500, height: 500 }
    ]);
}
