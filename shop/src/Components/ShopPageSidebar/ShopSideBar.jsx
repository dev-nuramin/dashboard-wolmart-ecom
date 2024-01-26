import React from 'react'
import './ShopSideBar.css'
const ShopSideBar = () => {
  return (
    <>
    <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
          {/* <!-- Start of Sidebar Overlay --> */}
          <div className="sidebar-overlay"></div>
          <a className="sidebar-close" href="#">
            <i className="close-icon"></i>
          </a>

          {/* <!-- Start of Sidebar Content --> */}
          <div className="sidebar-content scrollable">
            {/* <!-- Start of Sticky Sidebar --> */}
            <div className="sticky-sidebar">
              <div className="filter-actions">
                <label>Filter :</label>
                <a href="#" className="btn btn-dark btn-link filter-clean">
                  Clean All
                </a>
              </div>
              {/* <!-- Start of Collapsible widget --> */}
              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <span>Search Products</span>
                </h3>
                <form className="price-range">
                    <input
                      type="number"
                      name="min_price"
                      className="min_price text-center"
                      placeholder="Search"
                      style={{width: '100%'}}
                    />
                    <button className='btn btn-primary btn-rounded'>
                        <i className='fa fa-search'></i>
                    </button>
                    
                  </form>
              </div>
              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <span>All Categories</span>
                </h3>
                <ul className="widget-body filter-items search-ul">
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Babies</a>
                  </li>
                  <li>
                    <a href="#">Beauty</a>
                  </li>
                  <li>
                    <a href="#">Decoration</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Furniture</a>
                  </li>
                </ul>
              </div>
              {/* <!-- End of Collapsible Widget -->

                                    <!-- Start of Collapsible Widget --> */}
              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <span>Price</span>
                </h3>
                <div className="widget-body">
                  <form className="price-range">
                    <input
                      type="number"
                      name="min_price"
                      className="min_price text-center"
                      placeholder="$min"
                    />
                    <span className="delimiter">-</span>
                    <input
                      type="number"
                      name="max_price"
                      className="max_price text-center"
                      placeholder="$max"
                    />
                    <a href="#" className="btn btn-primary btn-rounded">
                      Go
                    </a>
                  </form>
                </div>
              </div>
              {/* <!-- End of Collapsible Widget -->

                                    <!-- Start of Collapsible Widget --> */}

              {/* <!-- End of Collapsible Widget -->

                                    <!-- Start of Collapsible Widget --> */}
              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <span>Brand</span>
                </h3>
                <ul className="widget-body filter-items search-ul">
                  <li>
                    <a href="#">Samsung</a>
                  </li>
                  <li>
                    <a href="#">Sony</a>
                  </li>
                  <li>
                    <a href="#">Apple</a>
                  </li>
                  <li>
                    <a href="#">Motorola</a>
                  </li>
                  <li>
                    <a href="#">Itel</a>
                  </li>
                  <li>
                    <a href="#">Toshiba</a>
                  </li>
                  <li>
                    <a href="#">Nokia</a>
                  </li>
                  <li>
                    <a href="#">Xiomi</a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <span>Tags</span>
                </h3>
                <div className="tag-list">
                  <a href="#">Electronics</a>
                  <a href="#">Men</a>
                  <a href="#">Women</a>
                  <a href="#">Kid's</a>
                </div>
              </div>
              {/* <!-- End of Collapsible Widget -->

                                    <!-- Start of Collapsible Widget --> */}
            </div>
            {/* <!-- End of Sidebar Content --> */}
          </div>
          {/* <!-- End of Sidebar Content --> */}
        </aside>
    </>
  )
}

export default ShopSideBar