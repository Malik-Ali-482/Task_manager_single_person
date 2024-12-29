import React from 'react';
import Section from '../components/Section';
import TeamMember from '../components/TeamMember';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Our mission is to help you stay organized, focused, and productive.</p>
      </div>

      <div className="about-content">
        <Section 
          title="Who We Are" 
          content="At TaskMaster, we are a team of passionate developers, designers, and productivity enthusiasts. We believe that effective task management is key to a balanced, successful life. Our goal is to make your daily life easier, more organized, and more productive through our intuitive, user-friendly task management platform."
        />

        <Section 
          title="Our Mission" 
          content="Our mission is simple – to empower you to take control of your tasks and achieve more every day. Whether you're managing a busy work schedule, organizing personal projects, or tracking goals, TaskMaster is designed to help you get things done."
        />

        <Section 
          title="Our Features" 
          content={
            <ul>
              <li>Task Creation & Organization: Easily create and categorize tasks.</li>
              <li>Deadline Reminders: Never miss a deadline with built-in alerts.</li>
              <li>Statistics & Analytics: Track your task completion and productivity with detailed reports.</li>
              <li>Sync Across Devices: Access your tasks from anywhere with cloud syncing.</li>
              <li>Customizable Themes: Personalize your task management experience with custom themes.</li>
            </ul>
          }
        />

        <Section 
          title="Our Values" 
          content="We value simplicity, efficiency, and helping users achieve their goals. Every line of code is written with care to ensure a seamless, powerful experience for you. We are committed to continuous improvement, always working to bring new features and updates to make TaskMaster even better."
        />

        <div className="about-section">
          <h2>Meet the Team</h2>
          <div className="team">
          <TeamMember name="Saad-ur-Rehman" role="Developer" image="https://i.postimg.cc/3wk1ny04/saad.jpg" />
          <TeamMember name="Muhammad Umar" role="UI/UX Designer" image="https://i.postimg.cc/bwCLx0rf/umar.jpg" />
            </div>
        </div>
      </div>

      <footer className="about-footer">
        <p>&copy; 2024 TaskMaster Inc. | All rights reserved.</p>
      </footer>
    </section>
  );
}

export default AboutUs;
