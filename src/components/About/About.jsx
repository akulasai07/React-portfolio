import React from 'react';
import skills from "../../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
        <h2 className={styles.title}>What I do</h2>
        <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

            <ul className={styles.aboutItems}>
                
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                    <p>Expertise in Core Java, Java 8/11, and SQL, along with frameworks like Spring MVC, Spring Boot, Spring Security, Hibernate, JPA, and Microservices for building scalable and secure back-end solutions. </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>Proficient in front-end technologies such as React.js, Vue.js, Angular.js, HTML, CSS, JavaScript, TypeScript, Bootstrap, and jQuery to create responsive and interactive user interfaces. </p>
                    </div>
                </li>
              
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>Ability to work with relational and NoSQL databases like SQL Server, PostgreSQL, MongoDB, etc., for optimized data management.  </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>Well-versed in writing unit tests with JUnit to maintain software quality and reliability throughout the development lifecycle.</p>
                    </div>
                </li>
               
            </ul>
        </div>
    </section>
  )
}

