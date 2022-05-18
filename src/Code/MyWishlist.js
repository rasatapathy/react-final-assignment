import React from 'react';
import { NavLink } from "react-router-dom";
// import { getCourses } from './CourseList';
import { getCourseByID } from './CourseList';
export default function MyWishlist() {
    const courses = [
        getCourseByID("1"),
        getCourseByID("3")
    ]
  return (
      <div className='main_content'>
    <div className='allcourses_header'>
        <span className='courses_header_text'>Discover Latest courses on <br/>React</span>
        <img className="react_img" alt="" src="https://cdn.sanity.io/images/ay6gmb6r/production/1233ce7b2eab4261d9a77e86797b523dd652475e-2240x1260.png?w=800&h=450&fit=crop"/>
    </div>
    <div className='all-courses'>
            <div className='courses-left'>
                <div className='left_top'>
                    <div>
                        <p className='Head_text'>My Wishlist</p>
                    </div>
                    <div>
                        <select >
                            <option value="">Course Price</option>
                            <option value="low">Lowest Price</option>
                            <option value="high">Highest Price</option>
                        </select>
                    </div>
                </div>
                <div className="all_my_courses">
                    {courses.map((course)=> {
                        return (
                            <div className='course-card'>
                                <div className='card_img'>
                                    <img alt="" src={course.course_logo}/>
                                </div>
                                <div className='card_text'>
                                    <p>{course.course_name}</p>
                                    <p>
                                        <button className="button_topic" type="button">{course.tag1}</button>
                                        <button className="button_topic" type="button">{course.tag2}</button>
                                    </p>
                                </div>
                                <div className='card_creator'>{course.instructor_name}</div>
                                <div className='card_star'>star</div>
                                <div className='card_discount_price'>Rs. {course.course_cost_discounted}/-</div>
                                <div className='card_price'>Rs. {course.course_cost_original}/-</div>
                                <div className='card_cart_button'>
                                    <button className="button_cart" type="button">ADD TO CART</button>
                                </div>
                                <div className='card_arrow'>{/* <NavLink to={"/coursedetails"}> > </NavLink> */}</div>
                            </div>
                        );
                    })}
                    
                </div>
                {/* All my courses ends here*/}
            </div>
            <div className='courses-right'>
                <div className='right_top'>
                <input className="search_bar" type="text" placeholder="Search by name" />
                </div>
                <div className='mycart_tab'>
                    <div className='mycart_text'>
                        Your cart details
                    </div>
                    <div className='mycart_contents'>
                        Your cart is empty right now. Please add courses from the list.
                    </div>
                    <div className='mycart_value'>
                        <span className='mycart_value_text'>Total cart value</span>
                        <span className='cart_value'>0 RS/-</span>
                    </div>
                </div>
            </div>
    </div>
    </div>
  );
}