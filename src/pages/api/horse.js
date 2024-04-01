// pages/api/dog.js
export default function handler(req, res) {
    res.status(200).json([
        { src: '/horses/horse1.jpg', alt: 'horse', width: 500, height: 500 },
        { src: '/horses/horse2.jpg', alt: 'horse', width: 500, height: 500 },
        { src: '/horses/horse3.jpg', alt: 'horse', width: 500, height: 500 },
        { src: '/horses/horse4.jpg', alt: 'horse', width: 500, height: 500 },
        { src: '/horses/horse5.jpg', alt: 'horse', width: 500, height: 500 },
        { src: '/horses/horse6.jpg', alt: 'horse', width: 500, height: 500 },
        { src: '/horses/horse7.jpg', alt: 'horse', width: 500, height: 500 }
    ]);
}
