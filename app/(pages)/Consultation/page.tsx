"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown, Send } from 'lucide-react';

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import {PatternFormat} from "react-number-format";

const formSchema = z.object({
    firstName: z.string().min(2, "Введите имя"),
    lastName: z.string().min(2, "Введите фамилию"),
    email: z.string().email("Некорректный email"),
    phone: z.string().min(10, "Введите корректный номер"),
    country: z.string().min(1, "Выберите страну"),
    program: z.string().min(1, "Выберите программу"),
    message: z.string().min(10, "Опишите подробнее"),
    privacy: z.boolean().refine((val) => val === true, "Нужно согласие"),
});

const countries = [
    { id: "nz", name: "Новая Зеландия" },
    { id: "au", name: "Австралия" },
    { id: "ca", name: "Канада" },
];

const programs = [
    { id: "bachelor", name: "Бакалавриат" },
    { id: "master", name: "Магистратура" },
    { id: "foundation", name: "Foundation" },
];

export default function ConsultationPage() {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            country: "",
            program: "",
            privacy: false,
        }
    });

    const selectedCountry = watch("country");
    const selectedProgram = watch("program");

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Данные формы:", data);
    };

    const inputStyles = "rounded-xl h-12 border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors placeholder:font-mono text-base tracking-wider";

    return (
        <main className="bg-white min-h-screen pt-40 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">
                        Запросить консультацию
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Заполните форму, и наш консультант свяжется с вами в ближайшее время
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm">
                        <h2 className="text-xl font-bold text-[#101828] mb-3">Форма обратной связи</h2>
                        <p className="text-[#7F838D] mb-5">Мы ответим на все ваши вопросы о программах обучения</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="font-bold text-[#101828]">Имя *</Label>
                                    <Input id="firstName" {...register("firstName")} className={inputStyles} placeholder="Введите имя" />
                                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="font-bold text-[#101828]">Фамилия *</Label>
                                    <Input id="lastName" {...register("lastName")} className={inputStyles} placeholder="Введите фамилию" />
                                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="font-bold text-[#101828]">Email *</Label>
                                <Input id="email" {...register("email")} className={inputStyles} placeholder="example@mail.com" />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="font-bold text-[#101828]">Телефон *</Label>
                                <PatternFormat
                                    format="+7 (###) ###-##-##"
                                    mask="_"
                                    getInputRef={register("phone").ref}
                                    onValueChange={(values) => {
                                        setValue("phone", values.value, { shouldValidate: true });
                                    }}
                                    customInput={Input}
                                    className={inputStyles}
                                    placeholder="+7 (___) ___-__-__"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-[10px]">
                                    <Label className="text-sm font-bold text-[#101828]">Страна интереса</Label>
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild className="group">
                                            <button type="button" className="flex items-center justify-between w-full px-4 h-12 rounded-xl border border-gray-200 bg-white text-sm text-gray-500 hover:border-black focus:border-black focus:outline-none transition-all data-[state=open]:border-black">
                                                <span>{countries.find(c => c.id === selectedCountry)?.name || "Выберите страну"}</span>
                                                <ChevronDown
                                                    size={16}
                                                    className="text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                                />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="start"
                                            className="min-w-[240px] w-[calc(var(--radix-dropdown-menu-trigger-width)+1px)] rounded-xl border-gray-100 shadow-xl p-1 bg-white z-50"
                                        >
                                            {countries.map((country) => (
                                                <DropdownMenuItem
                                                    key={country.id}
                                                    onClick={() => setValue("country", country.id, { shouldValidate: true })}
                                                    className="rounded-lg cursor-pointer py-3 px-4 text-sm focus:bg-gray-50 focus:text-black outline-none transition-colors"
                                                >
                                                    {country.name}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                                </div>

                                <div className="space-y-[10px]">
                                    <Label className="text-sm font-bold text-[#101828]">Программа интереса</Label>
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild className="group">
                                            <button type="button" className="flex items-center justify-between w-full px-4 h-12 rounded-xl border border-gray-200 bg-white text-sm text-gray-500 hover:border-black focus:border-black focus:outline-none transition-all data-[state=open]:border-black">
                                                <span>{programs.find(p => p.id === selectedProgram)?.name || "Выберите программу"}</span>
                                                <ChevronDown
                                                    size={16}
                                                    className="text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                                />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="start"
                                            className="min-w-[240px] w-[calc(var(--radix-dropdown-menu-trigger-width)+1px)] rounded-xl border-gray-100 shadow-xl p-1 bg-white z-50"
                                        >
                                            {programs.map((program) => (
                                                <DropdownMenuItem
                                                    key={program.id}
                                                    onClick={() => setValue("program", program.id, { shouldValidate: true })}
                                                    className="rounded-lg cursor-pointer py-3 px-4 text-sm focus:bg-gray-50 focus:text-black outline-none transition-colors"
                                                >
                                                    {program.name}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="font-bold text-[#101828]">Ваш опрос *</Label>
                                <Textarea id="message" {...register("message")} className="rounded-xl min-h-[120px] border-gray-200 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors" placeholder="Ваш вопрос..." />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="privacy"
                                        onCheckedChange={(checked) => setValue("privacy", checked as boolean, { shouldValidate: true })}
                                        className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
                                    />
                                    <Label htmlFor="privacy" className="text-sm text-gray-500 font-normal cursor-pointer">
                                        Я согласен с политикой конфиденциальности
                                    </Label>
                                </div>
                                {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy.message}</p>}
                            </div>

                            <Button type="submit" className="bg-black text-white px-4 py-2.5 rounded-md hover:bg-black/90 h-auto text-base transition-all active:scale-95">
                                Отправить запрос <Send className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div className="border border-gray-100 rounded-3xl p-8 space-y-8 shadow-sm bg-white">
                            <h3 className="text-lg font-bold text-[#101828]">Контактная информация</h3>
                            <div className="space-y-4">
                                <p className="text-sm font-bold text-[#101828]">Телефон</p>
                                <p className="text-gray-500">+7 (495) 123-45-67</p>
                                <p className="text-gray-500">+7 (495) 123-45-68</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-sm font-bold text-[#101828]">Email</p>
                                <p className="text-gray-500">info@studynz.com</p>
                                <p className="text-gray-500">support@studynz.com</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-sm font-bold text-[#101828]">Адрес</p>
                                <p className="text-gray-500">
                                    Москва, ул. Тверская, 10<br/>
                                    Офис 205, 2 этаж
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-sm font-bold text-[#101828]">Рабочие часы</p>
                                <p className="text-gray-500">
                                    Пн - Пт: 9:00 - 18:00<br/>
                                    Сб: 10:00 - 16:00<br/>
                                    Вс: Выходной
                                </p>
                            </div>
                        </div>
                        <div className="border border-gray-100 rounded-3xl p-8 shadow-sm bg-white">
                            <h3 className="text-lg font-bold text-[#101828] mb-6">Социальные сети</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
                                    <Button key={s} variant="secondary" className="bg-black text-white hover:bg-black/80 rounded-lg px-6 transition-colors">
                                        {s}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}