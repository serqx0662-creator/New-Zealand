"use client";
import React from "react";
import { CountryCard } from "./CountryCard";
import { countries } from "@/app/data/countries";

export default function CountriesPage() {
    return (
        <section className="flex flex-col gap-15 pt-40 pb-20 mx-auto px-4 md:px-6">
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Страны для обучения
                </h1>
                <p className="text-gray-500 text-base">
                    Выберите страну для обучения за рубежом
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-6 md:gap-7">
                {countries.map((country) => (
                    <CountryCard key={country.id} country={country} />
                ))}
            </div>
        </section>
    );
}
