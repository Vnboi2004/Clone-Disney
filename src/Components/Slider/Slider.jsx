import React, { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import GlobalApi from '../../Services/GlobalApi';
import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.min.css'; 

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const screenWidth=window.innerWidth;
function Slider() {
    const [movieList,setMovieList] = useState([]);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    
    const elementRef = useRef();
        useEffect(()=> {
            getTrendingMovies();
    },[])

    // Cập nhật rowLeft
    useEffect(() => {
        // Gắn sự kiện scroll vào phần tử
        const element = elementRef.current;
        const handleScroll = () => {
          if (element.scrollLeft > 0) {
            setShowLeftArrow(true); // Hiển thị mũi tên trái khi cuộn
          } else {
            setShowLeftArrow(false); // Ẩn mũi tên trái khi ở trang đầu
          }
        };
        // Gắn sự kiện
        element.addEventListener('scroll', handleScroll);
        // Dọn dẹp sự kiện khi component bị hủy
        return () => {
          element.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    // Lấy dữ liệu API
    const getTrendingMovies=() => {
        GlobalApi.getTrendingVideos.then(resp=>{
        //    console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    // Phím tắt slide bên phải
    const sliderRight=(element) => {
        element.scrollLeft+=screenWidth-110
    }

    // Phím tắt slide bên trái
    const sliderLeft=(element) => {
        element.scrollLeft-=screenWidth-110
    }
    
    return (
        <div>
            {/* Final */}
            <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer ${!showLeftArrow ? 'md:hidden' : ''}`} 
            onClick={() => sliderLeft(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute
            mx-8 mt-[150px] cursor-pointer right-0' 
            onClick={() => sliderRight(elementRef.current)}/>
    
            <div 
                className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' 
                ref={elementRef}> 
                {movieList.map((item, index) => (
                    <img key={index} src={IMAGE_BASE_URL + item.backdrop_path} 
                    className='min-w-full  md:h-[310px] object-cover
                    object-left-top mr-5 rounded-md hover:border-[4px]
                    border-gray-400 transition-all duration-100 ease-in'/>
                ))}
            </div>
        </div>
    )
}

export default Slider