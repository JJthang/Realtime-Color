
import { Banner, Customer, Reason } from "@/components/Home";
import { Footer, MainHeader } from "@/components/layouts";
import ScrollToTop from "@/components/shared/ScrollToTop";


export default async function Home() {
  return (
    <>
      <MainHeader />
      <Banner />
      <Reason />
      <Customer />
      <Footer />
      <ScrollToTop />
    </>
  );
}
