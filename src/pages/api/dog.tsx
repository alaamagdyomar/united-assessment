import { NextApiRequest, NextApiResponse } from 'next';
type Dog = {
    src: string;
    alt: string;
    width: number;
    height: number;
    description: string;
    videoPath: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Dog[]>) {
    res.status(200).json([
        {
            src: '/dogs/dog1.jpg',
            alt: 'dog1',
            width: 500,
            height: 500,
            description: 'these id the description of the first dog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            src: '/dogs/dog2.jpg',
            alt: 'dog2',
            width: 500,
            height: 500,
            description: 'these id the description of the second dog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            src: '/dogs/dog3.jpg',
            alt: 'dog3',
            width: 500,
            height: 500,
            description: 'these id the description of the third dog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            src: '/dogs/dog4.jpg',
            alt: 'dog4',
            width: 500,
            height: 500,
            description: 'these id the description of the forth dog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            src: '/dogs/dog5.jpg',
            alt: 'dog5',
            width: 500,
            height: 500,
            description: 'these id the description of the fifth dog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            src: '/dogs/dog6.jpg',
            alt: 'dog6',
            width: 500,
            height: 500,
            description: 'these id the description of the sex dog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            src: '/dogs/dog7.jpg',
            alt: 'dog7',
            width: 500,
            height: 500,
            description: 'these id the description of the seven dog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            src: '/dogs/dog8.jpg',
            alt: 'dog8',
            width: 500,
            height: 500,
            description: 'these id the description of the eight dog',
            videoPath: '/dogs/dogVideo.mp4'
        }
    ]);
}
