import Image from 'next/image';
import React, { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import SidebarItem from '../components/SideBarItem';
import axios from 'axios';

const Video = dynamic(() => import('next-video'), { ssr: false, loading: () => <p>Loading...</p> });

const animalTypes = ['Dog', 'Cat', 'Horse'];

export default function Home() {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [animalData, setAnimalData] = useState([]);
    const [selectedImageAlt, setSelectedImageAlt] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAnimalClick = useCallback(
        async (animal) => {
            setSelectedAnimal(animal);
            setSelectedImageAlt(null);
            setSearchTerm('');
            try {
                // Using Axios to make the GET request
                const response = await axios.get(`/api/${animal.toLowerCase()}`);
                // Axios automatically parses the JSON, so you can directly access `response.data`
                setAnimalData(response.data);
            } catch (error) {
                // Axios wraps errors in an error.response object, so you might want to adjust how you handle errors
                // Logging the error message
                console.error('Error fetching data:', error.message);
            }
        },
        [setSelectedAnimal, setSelectedImageAlt, setSearchTerm, setAnimalData]
    );

    const handleSearch = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const filteredAnimalData = useMemo(
        () => animalData.filter((image) => image.alt.toLowerCase().includes(searchTerm.toLowerCase())),
        [animalData, searchTerm]
    );
    const selectedImageData = useMemo(
        () => (selectedImageAlt ? animalData.find((image) => image.alt === selectedImageAlt) : null),
        [animalData, selectedImageAlt]
    );

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
                                onClick={() => handleAnimalClick(animal)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-4 lg:w-1/2 p-2">
                <div className="mb-4">
                    <input type="search" placeholder="Search" className="w-full p-2 border" onChange={handleSearch} />
                </div>
                <div className="flex flex-wrap -mx-2 w-full scroll-m-0">
                    {filteredAnimalData.map((image, index) => (
                        <div key={index} className="px-2 w-1/2">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-40 object-cover rounded-full mb-4"
                                width={image.width}
                                height={image.height}
                                layout="responsive"
                                onClick={() => setSelectedImageAlt(image.alt)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:flex md:flex-row md:w-1/4 lg:w-full">
                {selectedImageData && (
                    <>
                        <div className="md:w-1/2 p-5 border-4">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="w-[90%] mt-[20%] h-1/3 border-2">
                                    <Video className="max-w-4xl" src={selectedImageData.videoPath} />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-5 border-4">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="w-[90%] mt-[20%] h-1/3 border-2">{selectedImageData.description}</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
