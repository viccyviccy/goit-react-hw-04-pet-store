import React from 'react';
import design from './aboutPage.module.css';

const aboutMain = () => {
  return (
    <div className={design.aboutDiv}>
      <h2 className={design.h2_ap}>Fun facts about us</h2>
      <img
        className={design.img_ap}
        src="https://wallpapercave.com/wp/wp1898510.jpg"
        alt=""
      />
      <p className={design.p_ap}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed
        quaerat quae voluptatem, modi eos, fuga quibusdam facilis placeat
        voluptatum officia quis. Molestiae consequatur, optio fugit voluptatem
        maiores neque eius ipsam hic dolorum repellat pariatur rem iure impedit
        expedita molestias porro corporis! Repellat vero nobis odio eos quod
        saepe. Labore minus itaque, eveniet odio voluptates ducimus quisquam.
        Accusamus, animi ut velit consequuntur natus tempora maiores eius
        possimus esse incidunt rerum perferendis consequatur eligendi, earum
        dolores error quibusdam in soluta provident, quam atque itaque labore
        laborum corporis. Praesentium perferendis molestiae esse quis cumque
        sed, vitae quae commodi neque facilis modi. Eum eius quos asperiores
        nobis est atque facere similique voluptates modi quaerat nisi sequi,
        officiis alias cumque totam, in aliquam, nihil assumenda aliquid qui
        nostrum voluptatem molestias et. Eius ullam excepturi, maxime ea eaque
        fugit, officiis saepe totam aut illo porro, itaque placeat natus
        voluptatum eligendi at ducimus corrupti modi enim!
      </p>
    </div>
  );
};

export default aboutMain;
