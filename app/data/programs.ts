export interface Program {
    id: number;
    title: string;
    university: string;
    duration: string;
    price: string;
    image: string;
    slug: string;
}

export const PROGRAMS_DATA: Program[] = [
    {
        id: 1,
        title: "Бакалавриат по Бизнесу",
        university: "Университет Окленда, Новая Зеландия",
        duration: "3 года",
        price: "От $20,000/год",
        image: "/image/program.png",
        slug: "business-bachelor"
    },
    {
        id: 2,
        title: "Бакалавриат по Бизнесу",
        university: "Университет Окленда, Новая Зеландия",
        duration: "3 года",
        price: "От $20,000/год",
        image: "/image/program.png",
        slug: "business-bachelor-2"
    },
    {
        id: 3,
        title: "Бакалавриат по Бизнесу",
        university: "Университет Окленда, Новая Зеландия",
        duration: "3 года",
        price: "От $20,000/год",
        image: "/image/program.png",
        slug: "business-bachelor-3"
    }
];