import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../index.css";


export default function Playlist() {
  const [courseData, setCourseData] = useState({});
  const { id } = useParams();
  let token = localStorage.getItem('token');

  const getCourses = async () => {
    try {
      const res = await fetch(`http://localhost:5002/api/courses/${id}`, {
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
    <>
      <section className="playlist-details">
        <h1 className="heading">playlist details</h1>
        <div className="row">
          <div className="column">
            <form action="" method="post" className="save-playlist">
              <button type="submit">
                <i className="far fa-bookmark" /> <span>save playlist</span>
              </button>
            </form>
            <div className="thumb">
              <img src="images/pic-1.jpg" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>{courseData.authorname}</h3>
                <span>{courseData.date}</span>
              </div>
            </div>
            <div className="details">
              <h3>{courseData.title}</h3>
              <p>{courseData.desc}</p>
              <Link to={"/adminprofile"} className="inline-btn">
                view profile
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="playlist-videos">
        <h1 className="heading">playlist videos</h1>
        <div className="box-container">
          {courseData.videos && (
            <Link to={"/Comment"}>
              <div className="box">
                <i className="fas fa-play" />
                <img src="images/post-1.jpg" alt="" />
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
