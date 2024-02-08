import GridLayoutServicios from "@/app/components/GridLayoutServicios";
import React from "react";

const imageString: string =
  "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80";

const page = () => {
  return (
    <div className="m-12">
      <GridLayoutServicios 
        imagen1={imageString}
        imagen2={imageString}
        imagen3={imageString}
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore vel aut, exercitationem, voluptate, ea minus repellendus soluta praesentium molestiae veniam cum? Nisi maiores sint aut eligendi, explicabo asperiores nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus saepe blanditiis commodi nihil corporis. Reiciendis, sit nulla quo delectus commodi repellendus quibusdam mollitia. Accusamus doloremque ex magni voluptatem temporibus?"
        titulo="Lorem ipsum dolor sit amet consectetur."
      />
    </div>
  );
};

export default page;
