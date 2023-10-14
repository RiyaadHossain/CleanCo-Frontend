import AvailableService from "@/components/homepage/AvailableService";
import Banner from "@/components/homepage/Banner";
import Blogs from "@/components/homepage/Blogs";
import CategorySection from "@/components/homepage/CategorySection";
import ClientReview from "@/components/homepage/ClientReview";
import FAQ from "@/components/homepage/FAQ";
import LatestNews from "@/components/homepage/LatestNews";
import Overview from "@/components/homepage/Overview";
import UpcomingService from "@/components/homepage/UpcomingService";

export default function Home() {
  return (
    <main>
      <Banner />
      <CategorySection />
      <Overview />
      <AvailableService />
      <UpcomingService />
      <ClientReview />
      <LatestNews />
      <Blogs />
      <FAQ />
    </main>
  );
}
