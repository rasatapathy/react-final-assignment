const courses = [
    {
        id: "1",
        course_name: "Responsive Design Course XYZ",
        course_cost_original: 923,
        course_cost_discounted: 499,
        course_logo: "",
        is_wishlisted: false,
        instructor_name: "Joseph Marie",
        tag1: "React",
        tag2: "CSS",
    },
    {
        id: "2",
        course_name: "Learn React in 2 Hours",
        course_cost_original: 1923,
        course_cost_discounted: 999,
        course_logo: "",
        is_wishlisted: false,
        instructor_name: "Joseph Marie",
        tag1: "React",
        tag2: "Front-end",
    },
    {
        id: "3",
        course_name: "Future of Machine Learning",
        course_cost_original: 2999,
        course_cost_discounted: 1499,
        course_logo: "",
        is_wishlisted: false,
        instructor_name: "James Gosling",
        tag1: "AI",
        tag2: "ML",
    },
    {
        id: "4",
        course_name: "Free Will of Machines",
        course_cost_original: 2923,
        course_cost_discounted: 1299,
        course_logo: "",
        is_wishlisted: false,
        instructor_name: "Mark Zukerberg",
        tag1: "NLP",
        tag2: "Deep ML",
    },
    {
        id: "5",
        course_name: " Design Course PQR for Backend",
        course_cost_original: 3323, 
        course_cost_discounted: 1849,
        course_logo: "",
        is_wishlisted: false,
        instructor_name: "Joseph Marie",
        tag1: "React",
        tag2: "CSS",
    },
    {
        id: "6",
        course_name: "Learn Excel in One Go",
        course_cost_original: 923,
        course_cost_discounted:333,
        course_logo: "",
        is_wishlisted: false,
        instructor_name: "Joseph Marie",
        tag1: "Excel",
        tag2: "Analytics",
    },
    {
        id: "7",
        course_name: "Atomic Habits of Front End Development",
        course_cost_original: 2499,
        course_cost_discounted: 1499,
        course_logo: "",
        is_wishlisted: false,
        instructor_name: "Joseph Marie",
        tag1: "Front-end",
        tag2: "Habits",
    },
    
]

export function getCourses(){
    return courses;
}

export function getCourseByID(id){
    return courses.find((course)=> course.id === id);

}

