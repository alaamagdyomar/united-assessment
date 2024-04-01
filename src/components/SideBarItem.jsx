import Link from 'next/link';

export default function SidebarItem({ animal, onClick, isSelected }) {
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
