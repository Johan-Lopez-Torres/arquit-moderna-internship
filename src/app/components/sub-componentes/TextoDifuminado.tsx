// TEXTO DIFUMINADO
const TextoDifuminado: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="relative   ">
        <div
          className="h-auto  absolute inset-0 bg-gradient-to-r from-pink-500 
                          to-blue-500 to-cyan-500   blur-3xl opacity-30 "
        />
        <h1
          className=" h-28  bg-gradient-to-r  text-8xl font-extrabold text-center 
                         from-bubble-gum  to-bermuda text-transparent bg-clip-text"
        >
          <span className="text-bubble-gum">co</span>mponent library
        </h1>
      </div>
    </div>
  );
};
export default TextoDifuminado;
