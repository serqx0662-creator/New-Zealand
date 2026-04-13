import Header from "@/app/components/Header";
import Hero from "@/app/(pages)/Home/Hero";

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <main>
                <Hero />
-            </main>
        </div>
    );
}