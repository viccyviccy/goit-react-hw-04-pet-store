import React from 'react';
import design from './homePage.module.css';

const homeMain = () => {
  return (
    <div className={design.homePageDiv}>
      <h1 className={design.h1_hp}>Welcome to PawsOnline pet store</h1>
      <img
        src="http://s1.1zoom.net/big0/115/Cats_Grey_Laptops_Glance_494209.jpg"
        alt="img"
        className={design.image_hp}
      />
      <h2 className={design.h2_hp}> Why it matters to adopt?</h2>
      <p className={design.p_hp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        saepe placeat esse laboriosam. Odit doloremque autem amet alias ad a
        consequatur nesciunt non qui quasi et nam, expedita quas. Doloribus
        facilis odit cupiditate recusandae vero temporibus commodi quas
        sapiente. Itaque at nam deserunt nihil sint vero, aperiam similique
        quisquam nobis ut possimus debitis sequi earum aliquid distinctio,
        ratione laudantium reiciendis aut adipisci eveniet esse amet saepe.
        Pariatur excepturi soluta ut accusantium distinctio doloremque tempore
        consequatur delectus? Dolores asperiores atque quam, ipsum suscipit
        vitae architecto. Ad ex natus voluptates vel deleniti distinctio beatae
        quibusdam, cumque cum nisi, illo debitis, soluta perspiciatis vitae
        perferendis! Error id obcaecati, itaque tempore iste quidem at eligendi
        perspiciatis enim est! Iusto voluptatem quasi qui! Nulla quidem adipisci
        praesentium modi sint vitae accusamus ipsum? Quo sapiente aliquid
        placeat. Dicta ad ea voluptatem quas, commodi repudiandae blanditiis,
        excepturi tenetur assumenda distinctio itaque minima repellat rem nobis
        a architecto!
      </p>
    </div>
  );
};

export default homeMain;
