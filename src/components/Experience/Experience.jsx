/**import React from 'react';
import history from "../../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      
    </section>
  )
}
**/

import React from 'react';
import history from '../../../data/history.json';
import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiences</h2>
      <ul className={styles.history}>
        {history.map((historyItem, id) => (
          <li key={id} className={styles.historyItem}>
            <img
              src={getImageUrl(historyItem.imageSrc)}
              alt={`${historyItem.organisation} Logo`}
            />
            <div className={styles.historyItemDetails}>
              <h3>{`${historyItem.role},  ${historyItem.organisation}`}</h3>
              <p><em>{`${historyItem.startDate} - ${historyItem.endDate}`}</em></p>
              <ul>
                {historyItem.experiences.map((experience, id) => (
                  <li key={id}>{experience}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}