import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Main.scss';

const Main = () => {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="main">
      <div id="contents" className="inner contents">
        <section className="mainSwiper">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="mainSwiperInstance"
          >
            <SwiperSlide>
              <img src="/images/mainImage1.jpg" alt="images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/mainImage2.jpg" alt="images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/mainImage3.jpg" alt="images" />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="productSection1">
          <div className="textBox">
            <div className="title1 font24">NEW IN</div>
            <div className="title2 font14">신상품 5% 특별 할인!</div>
          </div>
          <div className="productBox">
            <div className="productList">
              <ul className="products">
                <li className="item">
                  <div className="productItem">
                    <div className="thumbnail">
                      <Link to="#" className="thumbnailLink">
                        <img src="/images/logo.png" alt="productImage" />
                      </Link>
                      <div className="buttonBox">
                        <span className="cart" />
                      </div>
                    </div>
                    <div className="description">
                      <div className="name">
                        <Link to="" className="itemLink">
                          <span className="itemName">
                            아이템 이름 목걸이&귀걸이 어쩌구 저쩌구
                          </span>
                        </Link>
                      </div>
                      <ul className="spec">
                        <div className="discountRate">5%</div>
                        <li className="salePrice">
                          <span>
                            <span>218,500원</span>
                          </span>
                        </li>
                        <li className="productSummary">
                          <span>
                            <span>92.5 SILVER</span>
                          </span>
                        </li>
                        <li className="originalPrice">
                          <span>
                            <span>230,000원</span>
                          </span>
                        </li>
                        <li className="color">
                          <span className="itemColorSpan">
                            <div className="itemColor">
                              <span className="colorChips" />
                            </div>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="productItem">
                    <div className="thumbnail">
                      <Link to="#" className="thumbnailLink">
                        <img src="/images/logo.png" alt="productImage" />
                      </Link>
                      <div className="buttonBox">
                        <span className="cart" />
                      </div>
                    </div>
                    <div className="description">
                      <div className="name">
                        <Link to="" className="itemLink">
                          <span className="itemName">
                            아이템 이름 목걸이&귀걸이 어쩌구 저쩌구
                          </span>
                        </Link>
                      </div>
                      <ul className="spec">
                        <div className="discountRate">5%</div>
                        <li className="salePrice">
                          <span>
                            <span>218,500원</span>
                          </span>
                        </li>
                        <li className="productSummary">
                          <span>
                            <span>92.5 SILVER</span>
                          </span>
                        </li>
                        <li className="originalPrice">
                          <span>
                            <span>230,000원</span>
                          </span>
                        </li>
                        <li className="color">
                          <span className="itemColorSpan">
                            <div className="itemColor">
                              <span className="colorChips" />
                            </div>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="productItem">
                    <div className="thumbnail">
                      <Link to="#" className="thumbnailLink">
                        <img src="/images/logo.png" alt="productImage" />
                      </Link>
                      <div className="buttonBox">
                        <span className="cart" />
                      </div>
                    </div>
                    <div className="description">
                      <div className="name">
                        <Link to="" className="itemLink">
                          <span className="itemName">
                            아이템 이름 목걸이&귀걸이 어쩌구 저쩌구
                          </span>
                        </Link>
                      </div>
                      <ul className="spec">
                        <div className="discountRate">5%</div>
                        <li className="salePrice">
                          <span>
                            <span>218,500원</span>
                          </span>
                        </li>
                        <li className="productSummary">
                          <span>
                            <span>92.5 SILVER</span>
                          </span>
                        </li>
                        <li className="originalPrice">
                          <span>
                            <span>230,000원</span>
                          </span>
                        </li>
                        <li className="color">
                          <span className="itemColorSpan">
                            <div className="itemColor">
                              <span className="colorChips" />
                            </div>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="productItem">
                    <div className="thumbnail">
                      <Link to="#" className="thumbnailLink">
                        <img src="/images/logo.png" alt="productImage" />
                      </Link>
                      <div className="buttonBox">
                        <span className="cart" />
                      </div>
                    </div>
                    <div className="description">
                      <div className="name">
                        <Link to="" className="itemLink">
                          <span className="itemName">
                            아이템 이름 목걸이&귀걸이 어쩌구 저쩌구
                          </span>
                        </Link>
                      </div>
                      <ul className="spec">
                        <div className="discountRate">5%</div>
                        <li className="salePrice">
                          <span>
                            <span>218,500원</span>
                          </span>
                        </li>
                        <li className="productSummary">
                          <span>
                            <span>92.5 SILVER</span>
                          </span>
                        </li>
                        <li className="originalPrice">
                          <span>
                            <span>230,000원</span>
                          </span>
                        </li>
                        <li className="color">
                          <span className="itemColorSpan">
                            <div className="itemColor">
                              <span className="colorChips" />
                            </div>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="moreButton">
              <Link to="#" className="more">
                More (<span className="currentPage">1</span>/
                <span className="totalPage">5</span>)
              </Link>
            </div>
          </div>
        </section>
        <section className="productSection2">
          <div>1</div>
        </section>
      </div>
    </div>
  );
};

export default Main;
