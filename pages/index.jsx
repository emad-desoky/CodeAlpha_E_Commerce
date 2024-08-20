import Category from "@/components/categories/Category";
import Footer from "@/components/footer/Footer";
import { FramerMotion } from "@/components/framer-motion/FramerMotion";
import Hero from "@/components/hero/Hero";
import NavBar from "@/components/navbar/Navbar";
import NewProducts from "@/components/new-products/NewProducts";
import Products from "@/components/products/Products";
import Sales from "@/components/sales/Sales";

export default function Home() {
  return (
    <>
      <NavBar />
      <FramerMotion />
      <Hero />
      <Category />
      <Products />
      <NewProducts />
      <Sales />
      <Footer />
    </>
  );
}
