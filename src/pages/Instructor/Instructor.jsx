import { useState, useEffect } from 'react';
import '../../index.css'

const CourseTeachers = ({ courseCard }) => {
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    // Fetch the teacher count for the specific course from your backend API
    const fetchTeacherCount = async () => {
      try {
        const response = await fetch(`YOUR_BACKEND_API/courses/${coursecard}/teachers/count`);
        if (!response.ok) {
          throw new Error(`Failed to fetch teacher count with status ${response.status}`);
        }

        const data = await response.json();
        setTeacherCount(data.count); // Update the state with the fetched count
      } catch (error) {
       console.error('Error fetching teacher count:', error.message);
      }
    };

    fetchTeacherCount();
  }, [courseCard ]); // Re-run this effect when courseId changes

  return (
    <div>
      <p>Number of Teachers for Course {courseCard }: {teacherCount}</p>
      {/* Add more content or display the teacher information as needed */}
    </div>
  );
};

export default CourseTeachers;
