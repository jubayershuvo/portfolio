import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./clients/components/404";
import Home from "./clients/pages/Home";
import FloatingMenu from "./clients/layout/Menu";
import Projects from "./clients/pages/Projects";
import Test from "./clients/components/Test";
import { useCallback, useRef, useState } from "react";
import Contact from "./clients/pages/Contact";
import Services from "./clients/pages/Services";
import Reviews from "./clients/pages/Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

function UserRouter() {
  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  const lastScrollY = useRef(0); // Reference to store last scroll position

  const handleScroll = useCallback(
    (e) => {
      const scrollableElement = e.target;
      const currentScrollY = scrollableElement.scrollTop || window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    },
    [setIsVisible]
  );

  return (
    <div
      className="bg-cover h-screen w-screen bg-center fixed overflow-y-auto overflow-x-hidden scrollable-container" // Added scrollable-container class
      style={{ backgroundImage: `url('./images/background.jpg')` }}
    >
      <FloatingMenu isVisible={isVisible} setIsVisible={setIsVisible} />
      <Routes>
        <Route path="/" element={<Home handleScroll={handleScroll} />} />
        <Route
          path="/projects"
          element={<Projects handleScroll={handleScroll} />}
        />
        <Route
          path="/contact"
          element={<Contact handleScroll={handleScroll} />}
        />
        <Route
          path="/services"
          element={<Services handleScroll={handleScroll} />}
        />
        <Route
          path="/reviews"
          element={<Reviews handleScroll={handleScroll} />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

function AdminRouter() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<AdminNavbar />}>
          <Route index element={<Dashboard />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="customers" element={<CustomerListPage />} />
          <Route path="products" element={<ProductList />} />
          <Route path="order/:_id" element={<OrderDetails />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="payments" element={<PaymentList />} />
          <Route path="payment/:_id" element={<PaymentDetails />} />
        </Route>
        <Route path="login" element={<AdminLogin />} /> */}
      </Routes>
    </>
  );
}
