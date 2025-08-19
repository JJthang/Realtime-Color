
import { Banner, Customer, Reason } from "@/components/Home";
import { Footer, MainHeader } from "@/components/layouts";


export default async function Home() {
  return (
    <>
      <MainHeader />
      <Banner />
      <Reason />
      <Customer />
      <Footer />
    </>
  );
}
