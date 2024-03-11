import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses'); // Replace with your API endpoint
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (courseId) => {
    try {
      const response = await axios.delete(`/api/courses/${courseId}`); // Replace with your API endpoint
      if (response.status === 200) { // Check for successful deletion
        const updatedCourses = courses.filter((course) => course.id !== courseId);
        setCourses(updatedCourses);
      } else {
        console.error('Course deletion failed:', response.data.message); // Handle potential errors
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (courseId) => {
    navigate(`/courses/${courseId}/edit`); // Replace with your edit route path
  };

  return (
    <section className="courses">
      <h1 className="heading">Courses</h1>
      <div className="box-container">
        {courses.map((course) => (
          <div className="box" key={course.id}>
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div className="info">
                <h3>{course.title}</h3>
                <span>{course.createdAt}</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-1.png" alt="" />
              <span>videos link</span>
            </div>
            <Link to={"/playlist"} className="inline-btn">
              view playlist
            </Link>
            <button onClick={() => handleDelete(course.id)}>Delete</button>
            <Link to={`/courses/${course.id}/edit`} className="inline-btn">
              Update
            </Link>
          </div>
        ))}
      </div>
      <div className="more-btn">
        <Link to={"/playlist"} className="inline-option-btn">
          view all courses
        </Link>
      </div>
    </section>
  );
};

export default AdminDashboard;
