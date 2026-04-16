"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { NZProgramTabs } from "./NZProgramTabs";
import { NZProgramSidebar } from "./NZProgramSidebar";
import { NZProgramHero } from "./NZProgramHero";
import { PROGRAMS_DATA } from "./data";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
    const unwrappedParams = React.use(params);
    const slug = unwrappedParams.id;

    const foundProgram = Array.isArray(PROGRAMS_DATA)
        ? PROGRAMS_DATA.find((p) => p.slug === slug)
        : null;

    const currentProgram = PROGRAMS_DATA.find((p) => p.slug === slug);

    const program = foundProgram || PROGRAMS_DATA[0];


    if (!program) {
        return (
            <div className="pt-40 text-center">
                <p>Программа не найдена</p>
                <Button onClick={() => window.history.back()}>Вернуться</Button>
            </div>
        );
    }

    return (
        <main className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-12">

                <Button
                    variant="outline"
                    className="mb-8 rounded-xl gap-2 border-gray-100 text-gray-500 font-bold h-12 px-6 hover:bg-gray-50 transition-all active:scale-95"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft size={18} /> Назад к программам
                </Button>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:flex-grow lg:max-w-[65%]">
                        <NZProgramHero
                            src={program.image}
                            title={program.title}
                            location={program.university}
                        />
                        <NZProgramTabs content={program.content} />
                    </div>

                    <NZProgramSidebar
                        duration={program.duration}
                        startDate="Сентябрь 2026"
                        price={program.price}
                        rating="4.8 / 5"
                    />
                </div>
            </div>
        </main>
    );
}