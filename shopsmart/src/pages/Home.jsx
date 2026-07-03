import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";


const products = [
    {id:1,name:"Nike Shoes",price:120},
    {id:2,name:"Adidas Shoes",price:97},
    {id:3,name:"Puma Shoes",price:110}
]


function Home(){
    return (
    <>
    <Navbar/>
    <Hero/>

    {
        products.map((items)=>(
        <ProductCard key={items.id} product = {items}/>

        ))
    }
    <Footer/>
    </>
    );
}

export default Home;