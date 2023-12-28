import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import FilterModal from "../components/FilterModal";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const productState=useSelector((state)=>state?.product?.product);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    getProducts();
  }, []);
  const getProducts =() =>{
    dispatch(getAllProducts());
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) { // Adjust the breakpoint as needed
        setGrid(2); // Set to a 2-column grid for mobile view
      } else {
        setGrid(4); // Set to a 4-column grid for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial grid state based on the window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
    
        <div className="row ">
          
          <div className="col-xxl-12 ">
            <div className="filter-sort-grid mb-4 p-1">
              <div className="d-flex justify-content-between align-items-center">
              <div className="col-xxl-3">
            <div className="filter-card">
              <h3 className="filter-title">Choose according to your preference</h3>
              <div>
                  {/*<button className="btn btn-sm btn-warning" onClick={handleShow}>*/}
                  {/*        filter*/}
                  {/*</button>*/}
                <FilterModal></FilterModal>
              </div>
            </div>
            
          
         

          </div >

               
                <div className="d-flex align-items-center gap-10">
                 
                  <div className="d-flex gap-10 align-items-center grid">
                    {/* <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    /> */}
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid "
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 products-list pb-5 ">
              <div className="col-12 d-flex gap-22 flex-wrap">
             
                  <ProductCard 
                  grid={grid} 
                  data={productState? productState: []} />
               
              </div>
             
            </div>
          </div>
        </div>
      </Container>

    </>
  );
};

export default OurStore;