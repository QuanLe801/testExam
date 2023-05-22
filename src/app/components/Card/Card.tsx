import { CardProps } from '@/app/types/CardInterface';
import styles from './style.module.css';
import React from 'react';
import Image from 'next/image';

function Card({ ...props }: CardProps) {
  const { title, description, imgUrl } = { ...props };
  return (
    <div className={styles.card_wrapper}>
      <h4 className={styles.card_title}>{title}</h4>
      <div className={styles.card_content}>
        <div className={styles.card_imgUrl}>
          <Image alt="" src={imgUrl} width={128} height={128} />
        </div>
        <p className={styles.card_description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
