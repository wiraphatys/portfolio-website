import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'BiteBuddy',
        description: "BiteBuddy is an online booking web application that my team and I have created. Customers can use the service to make reservations, and restaurant owners can create their restaurants for customers to book.",
        tools: ["React", "Redux", "Tailwind", "MUI", "NextJS", "ExpressJS", "NodeJS", "MongoDB", "AWS", "Git", "Vercel", "Postman"],
        role: 'Fullstack Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-Commerce REST API',
        description: 'I developed a REST API for E-Commerce web application that has full basic option of E-Commerce and implement by clean architecture principle',
        tools: ["Go", "Fiber", "GORM", "PostgreSQL", "Docker", "Git", "Postman"],
        role: 'Backend Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Massage Reservation System',
        description: 'I developed an online massage booking system where users can book appointments at massage parlors within the system. My role in this project is full-stack developer.',
        tools: ["React", "NextJS", "Tailwind", "Node.js", "ExpressJS","MongoDB", "AWS", "Git", "Vercel", "Postman"],
        code: '',
        role: 'Fullstack Engineer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Point of Sale',
        description: "POS project leveraging React for frontend and Node.js for backend, facilitating seamless transaction management and inventory tracking",
        tools: ["React", "Bootstrap", "NodeJS", "ExpressJS", "PostgreSQL", "Docker", "Postman"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Fullstack Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },