

export default function Dashboard(){
  return(
    <div className="Dashboard-container">
    <section className="hero-section">
      <h1>Welcome to our Computer Courses Platform</h1>
      <p>Unlock the world of technology with our comprehensive computer courses.</p>
     
    </section>

    <section className="Courses">
      <h1>Courses</h1>
      <div className="course-list">

        {/* Full Stack Development */}
        <div className="course-card">
          <h2>Full Stack Web Development</h2>
          <p>Become a full-stack developer with expertise in both front-end and back-end technologies.</p>
          
        </div>

        {/* Cybersecurity */}
        <div className="course-card">
          <h2>Cybersecurity Fundamentals</h2>
          <p>Enhance your knowledge in cybersecurity and ethical hacking.</p>
        </div>

        {/* Networking Course */}
        <div className="course-card">
          <h2>Networking Essentials</h2>
          <p>Explore the fundamentals of computer networking and protocols.</p>
          
        </div>

        {/* AI and Machine Learning */}
        <div className="course-card">
          <h2>AI and Machine Learning Basics</h2>
          <p>Dive into the world of artificial intelligence and machine learning.</p>
          
        </div>

        {/* Blockchain Technology */}
        <div className="course-card">
          <h2>Blockchain Basics</h2>
          <p>Explore the fundamentals of blockchain technology and cryptocurrencies.</p>
          
        </div>

        {/* Cloud Computing */}
        <div className="course-card">
          <h2>Cloud Computing Basics</h2>
          <p>Understand the principles of cloud computing and virtualization.</p>
          
        </div>

        {/* Game Developer */}
        <div className="course-card">
          <h2>Game Development Fundamentals</h2>
          <p>Create captivating games with fundamental game development skills.</p>
          
        </div>

        {/* Mobile App Development */}
        <div className="course-card">
          <h2>Mobile App Development Essentials</h2>
          <p>Build and deploy mobile applications for iOS and Android platforms.</p>
          
        </div>

        {/* Virtual Reality */}
        <div className="course-card">
          <h2>Introduction to Virtual Reality</h2>
          <p>Immerse yourself in the world of virtual reality and 3D environments.</p>
          
        </div>

        {/* Data Science */}
        <div className="course-card">
          <h2>Data Science Essentials</h2>
          <p>Learn the essentials of data science, analytics, and visualization.</p>
          
        </div>

        {/* Add more featured courses as needed */}
      </div>
    </section>

    <section className="benefits-section">
      <h1>Why Choose Us?</h1>
      <ul>
        <li>Expert Instructors: Learn from industry professionals and experienced instructors.</li>
        <li>Flexible Learning: Access courses anytime, anywhere, and at your own pace.</li>
        <li>Hands-On Projects: Apply your knowledge through hands-on projects and exercises.</li>
        <li>Community Support: Join a vibrant community of learners and experts.</li>
      </ul>
    </section>
  </div>   
  );
}