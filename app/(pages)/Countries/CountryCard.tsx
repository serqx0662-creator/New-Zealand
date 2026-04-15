"use client";
import Link from "next/link";
import { Country } from "@/app/data/countries";
import { GraduationCap } from "lucide-react";

interface CountryCardProps {
    country: Country;
    onClick?: (country: Country) => void;
    className?: string;
}

export const CountryCard = ({
    country,
    onClick,
    className,
}: CountryCardProps) => {
    return (
        <Link href={`/Countries/${country.slug}`} className="h-full">
            <div
                onClick={() => onClick?.(country)}
                className={`group h-full cursor-pointer rounded-[12px] overflow-hidden border border-gray-100 bg-white flex flex-col
            transition-all duration-500
            hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1
            ${className}`}
            >
                <div className="relative overflow-hidden h-48 shrink-0">
                    <img
                        src={country.imageUrl}
                        alt={country.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                        {country.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex-1 line-clamp-3">
                        {country.shortDescription}
                    </p>
                    <div className="flex w-full justify-between mt-auto">
                        <div className="flex flex-col items-center gap-1">
                            <GraduationCap className="w-5 h-5 text-gray-400" />
                            <span className="text-base font-bold text-gray-900">
                                {country.universitiesCount}
                            </span>
                            <span className="text-xs text-gray-400">
                                Университетов
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <GraduationCap className="w-5 h-5 text-gray-400" />
                            <span className="text-base font-bold text-gray-900">
                                {country.programsCount}
                            </span>
                            <span className="text-xs text-gray-400">
                                Программ
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <GraduationCap className="w-5 h-5 text-gray-400" />
                            <span className="text-base font-bold text-gray-900">
                                {country.studentsCount}+
                            </span>
                            <span className="text-xs text-gray-400">
                                Студентов
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
