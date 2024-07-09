import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Item from '../../components/Item/Item';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 4;

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    getProductList(currentPage);
  }, []);

  const getProductList = page => {
    fetch(
      `http://localhost:8080/admins/products/paginated?page=${page}&size=${pageSize}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
      .then(res => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch(getProductList)');
        }
      })
      .then(data => {
        console.log(data);
        setProductList(prevProductList => [
          ...prevProductList,
          ...data.products,
        ]);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      })
      .catch(error => {
        console.error('productList를 불러오는데 실패했습니다 :', error.message);
      });
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      getProductList(currentPage + 1);
    }
  };

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
                {productList.map(product => (
                  <Item key={product.id} product={product} />
                ))}
              </ul>
            </div>
            <div className="moreButton">
              <button className="more" onClick={handleLoadMore}>
                More (<span className="currentPage">{currentPage}</span>/
                <span className="totalPage">{totalPages}</span>)
              </button>
            </div>
          </div>
        </section>
        <section className="productSection2">
          <div className="textBox">
            <div className="textInner">
              <div className="text1">Celebrity Information</div>
              <div className="text2">
                <Link to="#">more</Link>
              </div>
            </div>
          </div>
          <div className="bannerBox">
            <Link to="#">
              <picture>
                <img src="/images/bannerImage1.jpg" alt="images" />
              </picture>
            </Link>
          </div>
        </section>
        <section className="productSection3">
          <div className="bannerBox">
            <Link to="#">
              <picture>
                <img src="/images/bannerImage2.jpg" alt="images" />
              </picture>
            </Link>
          </div>
          <div className="textBox">
            <div className="textInner">
              <div className="text1">Celebrity Information</div>
              <div className="text2">
                <Link to="#">more</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mainBanner">
          <div className="textBanner">
            <div className="text1">
              Radiant Glimmer
              <span className="type1"> </span>
              온라인 스토어
              <span className="type2" />
              회원 가입하시고
              <span className="type1"> </span>
              다양한
              <span className="type1"> </span>
              혜택을 만나세요.
            </div>
            <div className="text2">
              <Link to="/login">Sign up now</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
