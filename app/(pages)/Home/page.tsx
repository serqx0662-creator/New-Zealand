import Header from "@/app/components/Header";
import Hero from "@/app/(pages)/Home/Hero";
import WhyNZSection from "./WhyNZSection";
import NZServices from "@/app/(pages)/Home/NZServices";

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <main>
                <Hero />
                <WhyNZSection/>
                <NZServices/>
-            </main>
        </div>
    );
}