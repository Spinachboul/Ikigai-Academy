import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero } from '../sections';

const Page = () => (
  <div className="mainColor overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">

      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-03 z-0" />
      {/*<Feedback />*/}
    </div>
    <Footer />
  </div>
);

export default Page;
