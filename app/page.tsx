import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Gameplay } from '@/components/Gameplay';
import { HowToPlay } from '@/components/HowToPlay';
import { SimilarGames } from '@/components/SimilarGames';
import { WhyChoose } from '@/components/WhyChoose';
import { Tips } from '@/components/Tips';
import { FAQ } from '@/components/FAQ';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col" data-oid="7wvqf7f">
            <Header data-oid="wje84:z" />
            <main data-oid="6ilhydv">
                <Hero data-oid="f7nq5h." />
                <Features data-oid="ctr55b3" />
                <Gameplay data-oid="5:8ariz" />
                <HowToPlay data-oid="gtkwq0p" />
                <SimilarGames data-oid="4ajh6ck" />
                <WhyChoose data-oid="_vmmq0b" />
                <Tips data-oid="z9n6dsd" />
                <FAQ data-oid="mzx3nur" />
                <Community data-oid=".fdt3pz" />
            </main>
            <Footer data-oid="79z7n9l" />
        </div>
    );
}
