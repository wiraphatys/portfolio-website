import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-Commerce System API',
        description: "E-Commerce Platform REST API build with Node.js Nest.js web framework for TypeScript and PgSQL for relational database. Moreover, dockerize node-server pgsql and pgadmin for deployment",
        tools: ["NodeJS", "NestJS", "Prisma", "PostgreSQL", "Docker", "Git", "Postman"],
        role: 'Backend Engineer',
        code: 'https://github.com/wiraphatys/ecommerce-api-nestjs',
        demo: '',
        image: travel,
    },
    {
        id: 2,
        name: 'Shop Management System API (mini POS)',
        description: "I've developed a robust Shop Management System REST API tailored for backend management in shops, supermarkets, and similar businesses. Developed using Go programming language, implemented by clean architecture principle",
        tools: ["Go", "Fiber", "GORM", "PostgreSQL", "Docker", "Git", "Postman"],
        role: 'Backend Engineer',
        code: 'https://github.com/wiraphatys/shop-management-go',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Massage Shop Booking Platform',
        description: 'I developed an online massage booking system where users can book appointments at massage parlors within the system. My role in this project is full-stack developer.',
        tools: ["React", "NextJS", "Tailwind", "NodeJS", "ExpressJS","MongoDB", "AWS", "Git", "Vercel", "Postman"],
        role: 'Fullstack Engineer',
        code: '',
        demo: 'https://massage-reserve-shop-client.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'BiteBuddy',
        description: "BiteBuddy is an online booking web application that my team and I have created. Customers can use the service to make reservations, and restaurant owners can create their restaurants for customers to book.",
        tools: ["React", "Redux", "Tailwind", "MUI", "NextJS", "ExpressJS", "NodeJS", "MongoDB", "AWS", "Git", "Vercel", "Postman"],
        role: 'Fullstack Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
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