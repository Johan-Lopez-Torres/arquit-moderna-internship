import React from "react";

type CharacterProps = {
  name: string;
  id: number;
  imgUrl: string;
};

const CardApi: React.FC<CharacterProps> = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="text-2xl font-white font-extrabold"> </h1>
      <h1 className="text-2xl font-white font-extrabold"> </h1>
    </div>
  );
};


export default CardApi;