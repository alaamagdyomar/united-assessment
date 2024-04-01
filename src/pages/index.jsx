import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Video from 'next-video';

const animalTypes = ['Dog', 'Cat', 'Horse'];

function SidebarItem({ animal, onClick, isSelected }) {
    const baseStyle = 'block flex-1 text-center md:text-left p-2 hover:bg-gray-200';
    const selectedStyle = isSelected ? 'bg-gray-300' : '';
    return (
        <Link
            href="#"
            className={`${baseStyle} ${selectedStyle}`}
            onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                onClick(animal); // Call the passed onClick handler with the animal name
            }}>
            {animal}
        </Link>
    );
}

export default function Home() {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [animalData, setAnimalData] = useState([]);
    const [selectedImageAlt, setSelectedImageAlt] = useState(null);

    const handleAnimalClick = async (animal) => {
        setSelectedAnimal(animal);
        setSelectedImageAlt(null);
        try {
            const response = await fetch(`/api/${animal.toLowerCase()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setAnimalData(data);
            console.log('data =', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const selectedImageData = selectedImageAlt ? animalData.find((image) => image.alt === selectedImageAlt) : null;

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:flex md:flex-col md:w-1/4 lg:w-1/6 p-4 border-r">
                <div className="mb-4">
                    <div className="flex flex-row md:flex-col">
                        {animalTypes.map((animal) => (
                            <SidebarItem
                                key={animal}
                                animal={animal}
                                isSelected={selectedAnimal === animal}
                                onClick={() => {
                                    handleAnimalClick(animal);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-4 lg:w-1/2 p-2">
                <div className="mb-4">
                    <input type="search" placeholder="search" className="w-full p-2 border" />
                </div>
                <div className="flex flex-wrap -mx-2 w-full scroll-m-0">
                    {animalData.map((image, index) => (
                        <div key={index} className="px-2 w-1/2">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-40 object-cover rounded-full mb-4"
                                width={image.width}
                                height={image.height}
                                layout="responsive"
                                onClick={() => setSelectedImageAlt(image.alt)} // Save the image alt on click
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:flex md:flex-row md:w-1/4 lg:w-full">
                <div className="md:w-1/2 p-5 border-4">
                    <div className="w-full h-full flex justify-center items-center">
                        {selectedImageData && (
                            <div className="w-[90%] mt-[20%] h-1/3 border-2">
                                {/* Display the description for the selected image */}
                                <Video className="max-w-4xl" src={selectedImageData.videoPath} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:w-1/2 p-5 border-4">
                    <div className="w-full h-full flex justify-center items-center">
                        {selectedImageData && (
                            <div className="w-[90%] mt-[20%] h-1/3 border-2">
                                {/* Display the description for the selected image */}
                                {selectedImageData.description}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
