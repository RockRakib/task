import Footer from "./Footer";
import Header from "./Header";
import TaskTable from "./Tasker/TaskTable";
import HeroSection from "./components/HeroSection";

const Page = () => {
  return (
    <>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Header />
        <HeroSection />
        <TaskTable />
        <Footer />
      </div>
    </>
  );
};

export default Page;
