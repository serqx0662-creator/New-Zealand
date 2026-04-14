import Hero from "@/app/(pages)/Home/Hero";
import WhyNZSection from "./WhyNZSection";
import NZServices from "@/app/(pages)/Home/NZServices";
import NZPopularPrograms from "@/app/(pages)/Home/NZPopularPrograms";

export default function Home() {
    return (
        <div className="relative">
            <Hero />
            <WhyNZSection/>
            <NZServices/>
            <NZPopularPrograms/>
        </div>
    );
}