"use client";

import React, { useState } from 'react';
import { NZprogramFilters } from "@/app/(pages)/Programs/NZprogram-filters";
import { PROGRAMS_DATA } from "@/app/data/programs";
import { NZProgramCard } from "@/app/(pages)/Programs/NZprogram-card";

export default function ProgramsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPrograms = PROGRAMS_DATA.filter(prog =>
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.university.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
                        Программы обучения
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Найдите подходящую программу для вашего будущего
                    </p>
                </header>

                <NZprogramFilters onSearch={setSearchQuery}/>

                <div className="mb-8">
                    <p className="text-gray-400 text-sm font-medium">
                        Найдено программ: {filteredPrograms.length}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {filteredPrograms.map((program) => (
                        <NZProgramCard key={program.id} program={program} />
                    ))}
                </div>

                {filteredPrograms.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        По вашему запросу ничего не найдено
                    </div>
                )}
            </div>
        </main>
    );
}