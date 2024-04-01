// pages/api/dog.js
export default function handler(req, res) {
    res.status(200).json([
        {
            src: '/horses/horse1.jpg',
            alt: 'horse1',
            width: 500,
            height: 500,
            description: 'these id the description of the 1 horse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            src: '/horses/horse2.jpg',
            alt: 'horse2',
            width: 500,
            height: 500,
            description: 'these id the description of the 2 horse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            src: '/horses/horse3.jpg',
            alt: 'horse3',
            width: 500,
            height: 500,
            description: 'these id the description of the 3 horse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            src: '/horses/horse4.jpg',
            alt: 'horse4',
            width: 500,
            height: 500,
            description: 'these id the description of the 4 horse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            src: '/horses/horse5.jpg',
            alt: 'horse5',
            width: 500,
            height: 500,
            description: 'these id the description of the 5 horse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            src: '/horses/horse6.jpg',
            alt: 'horse6',
            width: 500,
            height: 500,
            description: 'these id the description of the 6 horse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            src: '/horses/horse7.jpg',
            alt: 'horse7',
            width: 500,
            height: 500,
            description: 'these id the description of the 7 horse',
            videoPath: '/horses/horseVideo.mp4'
        }
    ]);
}
