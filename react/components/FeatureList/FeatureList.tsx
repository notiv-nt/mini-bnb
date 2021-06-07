import React from 'react';
import styles from './FeatureList.module.scss';

interface FeatureListProps {
  title: string;
  items: any[];
  children(item: any): React.ReactNode;
}

const FeatureList: React.FC<FeatureListProps> = ({ title, items, children }) => {
  return (
    <>
      <hr className={styles.Hr} />

      <div className={styles.List}>
        <div className={styles.Title}>
          <strong>{title}</strong>
        </div>

        <div className={styles.Content}>
          {items.map((item) => (
            <div className={styles.ListItem} key={item.title}>
              {children(item)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureList;
