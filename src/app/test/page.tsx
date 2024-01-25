import servicios from "@data/services.json";

// pages/Gallery.tsx
// import React from 'react';
// import styles from './page.module.css';
// import data from "@data/services.json"

// const Gallery: React.FC = () => {
//   return (
//     <div className={styles.gallery}>
//       <div className={styles.tall}>
//         <img src="/images/1.jpeg" alt="Image 1" />
//       </div>
//       <div className={styles.galleryItem}>
//         <img src="/images/2.jpeg " alt="/images/2.jpeg " />
//       </div>
//       <div className={styles.galleryItem}>
//         <img src="1.jpg" alt="Image 1" />
//       </div>

//     </div>
//   );
// };

// export default Gallery;

import React from "react";

const page = () => {
  return (
    <>
      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4  [&>img:not(:first-child)]:mt-5  lg:[&>img:not(:first-child)]:mt-8">
          <img src="https://source.unsplash.com/ztpUS4N1xhY" alt="" />
          <img src="https://source.unsplash.com/mPFSPqZOO7s" alt="" />
          <img src="https://source.unsplash.com/uPEnxrdSKIw" alt="" />
          <img src="https://source.unsplash.com/hFKZ5-OT9Ys" alt="" />
          <img src="https://source.unsplash.com/xoTt2fjs7d0" alt="" />
          <img src="https://source.unsplash.com/Vc2dD4l57og" alt="" />
          <img src="https://source.unsplash.com/hqnQWmIt3cY" alt="" />
          <img src="https://source.unsplash.com/NTGg2rtWDwg" alt="" />
          <img src="https://source.unsplash.com/uyX3qAQhZVA" alt="" />
          <img src="https://source.unsplash.com/LV-NvIcA-Gg" alt="" />
          <img src="https://source.unsplash.com/0qnRfgnZIsI" alt="" />
          <img src="https://source.unsplash.com/mpwF3Mv2UaU" alt="" />
          <img src="https://source.unsplash.com/gfMWhkDCwYM" alt="" />
          <img src="https://source.unsplash.com/8KtqjrskUg8" alt="" />
          <img src="https://source.unsplash.com/qAaGXj-AOv4" alt="" />
        </div>
      </div>
    </>
  );
};

export default page;
