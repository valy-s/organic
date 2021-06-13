import Section1 from "./components/section1/section1.component";
import Section2 from "./components/section2/section2.component";
import TestimonialsSection from "./components/testimonials/testimonials.component";
import BlogSection from "./components/blog-section/blog-section";
import Footer from "./components/footer/footer.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Section1 />
      <Section2 />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
