type CharacterProps = {
  id: number;
  name: string;
  imgUrl: string;
  alt: string;
};

const Card: React.FC<CharacterProps> = ({ id, name, imgUrl, alt }) => {
  return (
    <div className="">
      <h1 className="text-center">{name} </h1>
      <h2 className="text-center">{id} </h2>
      <img
        className="object-cover rounded-xl w-32 h-32 mx-auto mb-5"
        src={imgUrl}
        alt={alt}
      />
    </div>
  );
};

export default Card;
