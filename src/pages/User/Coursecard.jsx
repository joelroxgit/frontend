import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../index.css";

export default function Coursecard() {
  const [courseData, setCourseData] = useState([]);
  let token = localStorage.getItem("token");


  const getCourses = async () => {
    try {
      const res = await fetch('http://localhost:5002/api/courses/', {
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error(errorData.message);
        return;
      }

      const data = await res.json();
      setCourseData(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    getCourses();
  }, ); 

  return (
    <div>
      {courseData &&
        courseData.map((crs) => (
          <div className='home-items' key={crs.id}>
            <div className="box" id={crs.id}>
              <div className="tutor">
                <img src={crs.path} alt="" />
                <div className="info">
                  <h3>{crs.name}</h3>
                  <span>{crs.date}</span>
                </div>
              </div>
              <div className="thumb">
                <img src={crs.thumb} alt="" />
              </div>
              <h3 className="title">{crs.title}</h3>
              <Link to={`/Playlist/${crs.id}`} className="inline-btn">
                View Playlist
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
