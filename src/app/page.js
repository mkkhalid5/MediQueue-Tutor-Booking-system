import AvailableTutor from "@/components/availableTutor/AvailableTutor";
import ExtraSection1 from "@/components/extra/ExtraSection1";
import ExtraSection2 from "@/components/extra/ExtraSection2";
import HeroCarousel from "@/components/slider/HeroCarousel";

export default function Home() {
  return (
    <div>
      <div className="p-2 md:p-6">
        <HeroCarousel></HeroCarousel>
      </div>
      <AvailableTutor></AvailableTutor>
      <ExtraSection1></ExtraSection1>
      <ExtraSection2></ExtraSection2>
    </div>
  );
}
