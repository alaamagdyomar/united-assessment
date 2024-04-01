import Image from 'next/image';
import { useState } from 'react';

const animalTypes = ['Dog', 'Cat', 'Horse'];

const images = [
    { src: '/favicon.ico', alt: 'fav', width: 500, height: 500 },
    { src: '/favicon.ico', alt: 'fav', width: 500, height: 500 },
    { src: '/favicon.ico', alt: 'fav', width: 500, height: 500 },
    { src: '/favicon.ico', alt: 'fav', width: 500, height: 500 }
];

function SidebarItem({ animal, onClick, isSelected }) {
    const baseStyle = 'block flex-1 text-center md:text-left p-2 hover:bg-gray-200';
    const selectedStyle = isSelected ? 'bg-gray-300' : '';
    return (
        <a href="#" className={`${baseStyle} ${selectedStyle}`} onClick={onClick}>
            {animal}
        </a>
    );
}

export default function Home() {
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:flex md:flex-col md:w-1/4 lg:w-1/6 p-4 border-r">
                <div className="mb-4">
                    <div className="flex flex-row md:flex-col">
                        {animalTypes.map((animal) => (
                            <SidebarItem
                                key={animal}
                                animal={animal}
                                isSelected={selectedAnimal === animal}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAnimalClick(animal);
                                }}
                            />
                        ))}
                    </div>
                </div>
                {/* Additional content can be added here */}
            </div>
            <div className="border-4 lg:w-1/2 p-2">
                <div className="mb-4">
                    <input type="search" placeholder="search" className="w-full p-2 border" />{' '}
                </div>
                <div className="flex flex-wrap -mx-2 w-full">
                    {images.map((image, index) => (
                        <div key={index} className="px-2 w-1/2">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-40 object-cover rounded-full mb-4"
                                width={image.width}
                                height={image.height}
                                layout="responsive"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:flex md:flex-row md:w-1/4 lg:w-full h-[100vh]">
                <div className="md:w-1/2 p-5 border-4">
                    <div className="w-full h-full flex justify-center items-center">
                        {selectedAnimal && <div className="w-[90%] mt-[20%] h-1/3 border-2">display video for {selectedAnimal}</div>}
                    </div>
                </div>
                <div className="md:w-1/2 p-5 border-4">
                    <div className="w-full h-full flex justify-center items-center">
                        {selectedAnimal && <div className="w-[90%] mt-[20%] h-1/3 border-2">display info for {selectedAnimal}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
