import Image from 'next/image';
import styles from './page.module.css';
import Card from './components/Card/Card';
import { CardProps } from './types/CardInterface';
import { cardData } from './utils/const';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <div className={styles.menu_options}>Home</div>
        <div className={styles.menu_options}>Services</div>
        <div className={styles.menu_options}>News</div>
        <div className={styles.menu_options}>Blog</div>
        <div className={styles.menu_options}>Contact</div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <Image alt="" src="/logo.svg" width={310} height={122} />
        </div>
        <div className={styles.description}>
          <h4 className={styles.title_description}>
            Lorem ipsum dolor sit asmet?
          </h4>
          <p className={styles.content_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
        <div className={styles.card_item}>
          {cardData.map((item: CardProps, key) => (
            <Card
              key={key}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
