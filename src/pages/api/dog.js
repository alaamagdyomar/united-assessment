// pages/api/dog.js
export default function handler(req, res) {
    res.status(200).json([
        { src: '/dogs/dog1.jpg', alt: 'dog', width: 500, height: 500 },
        { src: '/dogs/dog2.jpg', alt: 'dog', width: 500, height: 500 },
        { src: '/dogs/dog3.jpg', alt: 'dog', width: 500, height: 500 },
        { src: '/dogs/dog4.jpg', alt: 'dog', width: 500, height: 500 },
        { src: '/dogs/dog5.jpg', alt: 'dog', width: 500, height: 500 },
        { src: '/dogs/dog6.jpg', alt: 'dog', width: 500, height: 500 },
        { src: '/dogs/dog7.jpg', alt: 'dog', width: 500, height: 500 },
        { src: '/dogs/dog8.jpg', alt: 'dog', width: 500, height: 500 }
    ]);
}
