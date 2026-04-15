
import { countries } from "@/app/data/countries";
import { CountryDetail } from "../CountryDetail";

interface Props {
    params: { slug: string };
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);
        if (!country) return <div>Страна не найдена</div>;

    return <CountryDetail country={country} />;
}

