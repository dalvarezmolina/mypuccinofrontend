import React from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-one/Banner';
import OfferArea from '../components/shop-style-one/OfferArea';
import Products from '../components/shop-style-one/Products';
import CategoryProducts from '../components/shop-style-one/CategoryProducts';
import TrendingProducts from '../components/shop-style-one/TrendingProducts';
import BestSeller from '../components/shop-style-one/BestSellers';
import Facility from '../components/shop-style-one/Facility';
import Testimonials from '../components/Common/Testimonials';
import Subscribe from '../components/Common/Subscribe';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

const Index = () => {
    // const products = useSelector((state) => state.products)
    // const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return (
        <React.Fragment>
            {/* <Home /> */}
            <Navbar />
            <Banner />
            <OfferArea />
            {/* <Products products={products} CompareProducts={addedItemsToCompare} />
            <CategoryProducts />
            <TrendingProducts products={products.slice(0, 8)} CompareProducts={addedItemsToCompare} />
            <BestSeller products={products.slice(8, 12)} CompareProducts={addedItemsToCompare} /> */}
            <Facility />
            <Testimonials />
            <Subscribe />
            <InstagramPhoto />
            <Footer /> 
            <AddsModal /> 
        </React.Fragment>
    );
}

export default Index;
