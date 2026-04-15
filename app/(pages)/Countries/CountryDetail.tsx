"use client";
import { Country } from "@/app/data/countries";
import Link from "next/link";

interface CountryDetailProps {
    country: Country;
}

export const CountryDetail = ({ country }: CountryDetailProps) => {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 pt-40 pb-20 ">
            <Link
                href="/Countries"
                className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors mb-6 sm:max-w-[174px]"
            >
                ← Назад к странам
            </Link>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                {country.name}
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8">
                {country.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    {/* О стране */}
                    <div className="border border-gray-200 rounded-xl p-4 md:p-6">
                        <h2 className="text-base font-semibold mb-3">
                            О стране
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">
                            {country.shortDescription}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {country.features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-200 rounded-lg p-4"
                                >
                                    <p className="font-semibold text-sm">
                                        {feature.title}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Программы */}
                    <div className="border border-gray-200 rounded-xl p-4 md:p-6">
                        <h2 className="text-base font-semibold mb-4">
                            Программы в {country.name}
                        </h2>
                        <div className="space-y-3">
                            {country.programs.map((program) => (
                                <div
                                    key={program.id}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-200 rounded-lg p-4"
                                >
                                    <div>
                                        <p className="font-semibold text-sm">
                                            {program.title}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {program.university}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-semibold text-sm">
                                            ${program.pricePerYear.toLocaleString()}/год
                                        </span>
                                        <button className="border border-gray-200 rounded-lg px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Сайдбар */}
                <div className="space-y-4">
                    <div className="border border-gray-200 rounded-xl p-5">
                        <h3 className="font-semibold mb-3">Быстрые факты</h3>
                        {country.facts.map((fact, i) => (
                            <p key={i} className="text-sm text-gray-500">
                                {fact.label}: {fact.value}
                            </p>
                        ))}
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5">
                        <h3 className="font-semibold mb-1">Нужна помощь?</h3>
                        <p className="text-sm text-gray-500 mb-4">
                            Наши консультанты помогут вам выбрать подходящую
                            программу
                        </p>
                        <button className="w-full bg-black text-white rounded-lg py-3 text-sm hover:bg-gray-800 transition-colors">
                            Запросить консультацию
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};