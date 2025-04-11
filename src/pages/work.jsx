import Layout from '../components/Layout';
import styles from '../styles/Work.module.css';
import { motion } from 'motion/react';
import projects from '../data/projects.json';

export default function Work() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Work</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.image} 
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}