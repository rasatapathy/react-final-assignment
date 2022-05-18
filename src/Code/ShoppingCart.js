import React from 'react';

import { getCourseByID } from './CourseList';
export default function HomePage() {
    const courses_in_cart = [
        getCourseByID("1"),
        getCourseByID("3"),
        getCourseByID("5"),
    ]
    const recommended_courses = [
        getCourseByID("2"),
        getCourseByID("4")
    ]
    let total_cost = 0;
    let money_saved = 0;
    for (let index in courses_in_cart){
        total_cost += courses_in_cart[index].course_cost_discounted;
        money_saved += (courses_in_cart[index].course_cost_original - courses_in_cart[index].course_cost_discounted); 
    }


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
                        <p className='text'>My Shopping Cart</p>
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
                    {courses_in_cart.map((course)=> {
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
                                <div className='card_discount_price'>{course.course_cost_discounted}/-</div>
                                <div className='card_price'><strike>{course.course_cost_original}/-</strike></div>
                                <div className='card_cart_button'>
                                    <button className="button_cart" type="button">ADD TO CART</button>
                                </div>
                                <div className='card_arrow'>{/* <NavLink to={"/coursedetails"}> > </NavLink> */}</div>
                            </div>
                        );
                    })}
                    
                </div>

                <div className='recommended_courses'>
                    <div className="recommended_courses_text"> <label>Recommended Courses</label></div>
                    {recommended_courses.map((course)=> {
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
                                <div className='card_discount_price'>{course.course_cost_discounted}/-</div>
                                <div className='card_price'><strike>{course.course_cost_original}/-</strike></div>
                                <div className='card_cart_button'>
                                    <button className="button_cart" type="button">ADD TO CART</button>
                                </div>
                                <div className='card_arrow'>{/* <NavLink to={"/coursedetails"}> > </NavLink> */}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='courses-right'>
                <div className='right_top'>
                <input className="search_bar" type="text" placeholder="Search by name" />
                </div>
                <div className='sc_mycart_tab'>
                    <div className='mycart_text'>
                        Your cart details
                    </div>
                    <div className='sc_mycart_contents'>
                        <label><bold>Total Amount</bold></label>
                        <h3>Rs. {total_cost}</h3>
                    
                        <div className='saved_amount'>
                            <small>   You Have Saved = {money_saved} </small>
                        </div>
                    </div>
                    <button className="button_cart" type="button">ADD TO CART</button>
                </div>
            </div>
    </div>
    </div>
  )
}