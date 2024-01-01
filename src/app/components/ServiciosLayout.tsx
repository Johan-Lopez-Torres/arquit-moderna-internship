import BlurImage from "../components/BlurImage";

const ServiceLayout = () => {
  return (
    <>
      <div className="m-14 2xl:m-auto   sm:min-h-screen md:h-screen lg:h-screen  text-black  p-6  max-w-[1500px] f">
        <div className="grid   w-full h-full  gap-3  grid-cols-2 grid-rows-5  md:grid-cols-3 md:grid-rows-5  lg:grid-cols-5 lg:grid-rows-5">
          <div className="col-span-2  md:col-span-1 md:row-start-3  lg:col-span-2 lg:row-span-3   ">
            <BlurImage
              hash="LtLi3|2h.ibp==wGnNxI.7f#R6rw"
              src="/images/grid/premier.jpg"
            />
          </div>
          <div className=" md:row-span-2 md:col-start-4 md:row-start-4  lg:col-span-1 lg:row-span-2  lg:row-start-4   ">
            <BlurImage
              hash="L8F68|A5xVxt5FxvW;M{00r9IqtR"
              src="/images/2.jpeg"
              imgClass="object-bottom"
            />
          </div>
          <div className="md:row-span-2 md:col-span-1  lg:col-span-1 lg:row-span-1 lg:row-start-4 lg:col-start-2  ">
            <BlurImage
              hash="LPF=N|EOobIq?wSioIRjE,%LM|s,"
              src="/images/1.jpeg"
            />
          </div>
          <div className="col-span-2 md:row-span-2 md:col-span-3 lg:col-span-1 lg:row-span-1 lg:row-start-5 lg:col-start-2 ">
            <BlurImage
              hash="LKG05$tn00ro^mV{9soyyZRkQ-t7"
              src="/images/grid/patio.jpg"
            />
          </div>
          <div className="col-start-1 row-start-1 col-span-2 row-span-2  sm:row-start-4 sm:col-span-2 sm:row-span-3  md:row-start-1 md:col-start-1 md:col-span-3 md:row-span-3 lg:col-span-3 lg:row-span-5 ">
            <section className="  h-full">
              <h1 className="text-center font-extrabold text-2xl text-white mb-6">
                PLANOS
              </h1>
              <p className="text-xl text-white leading-10 mx-12">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium alias dignissimos consequatur error repellendus,
                voluptas fugit! Officia placeat atque ratione odit similique aut
                aliquid iure ipsam, amet ducimus, sit unde? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Doloribus sed excepturi,
                quis consectetur laboriosam doloremque adipisci qui autem rerum
                assumenda, id consequatur consequuntur, illo nostrum nihil nisi
                tempora quidem nam?
              </p>
              <i className="fa-regular fa-user"></i>
            
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLayout;
