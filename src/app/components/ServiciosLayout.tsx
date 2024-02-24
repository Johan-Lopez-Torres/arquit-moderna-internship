import BlurImage from "../components/BlurImage";

const ServiceLayout = () => {
  return (
    <>
      <div className="m-14 2xl:m-auto   sm:min-h-screen md:h-screen lg:h-screen  text-black  p-6  max-w-[1500px] ">
        <div className="grid   w-full h-full  gap-3  grid-cols-1 grid-rows-5  md:grid-cols-3 md:grid-rows-5  lg:grid-cols-5 lg:grid-rows-5">
          <div className="col-span-2  sm:row-start-3  md:col-span-1 md:row-start-3  lg:col-span-2 lg:row-span-3   ">
            <BlurImage
              hash="LtLi3|2h.ibp==wGnNxI.7f#R6rw"
              src="/images/grid/premier.jpg"
            />
          </div>
          <div className=" md:row-span-3 sm:row-start-2  md:col-span-1 md:col-start-1 md:row-start-4  lg:col-span-1 lg:row-span-2  lg:row-start-4   ">
            <BlurImage
              hash="L8F68|A5xVxt5FxvW;M{00r9IqtR"
              src="/images/2.jpeg"
              imgClass="object-bottom"
            />
          </div>
          <div className=" sm:row-start-2  md:row-span-2 md:col-span-1  lg:col-span-1 lg:row-span-2 lg:row-start-4 lg:col-start-2  ">
            <BlurImage
              hash="LPF=N|EOobIq?wSioIRjE,%LM|s,"
              src="/images/1.jpeg"
            />
          </div>

          <div className=" col-start-1 row-start-1 col-span-2 row-span-2  sm:row-start-1 sm:col-span-2 sm:row-span-3  md:row-start-1 md:col-start-2 md:col-span-2 md:row-span-5 lg:col-span-3 lg:row-span-5 ">
            <section className="  h-full flex flex-col content-between">
              <div>
                <h1 className="text-center font-extrabold text-2xl text-white mb-6 ">
                  PLANOS
                </h1>
                <p className="text-xl text-white leading-10 mx-12">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium alias dignissimos consequatur error repellendus,
                  voluptas fugit! Officia placeat atque ratione odit similique
                  aut aliquid iure ipsam, amet ducimus, sit unde? Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Doloribus sed
                  excepturi, quis consectetur laboriosam doloremque adipisci qui
                  autem rerum assumenda, id consequatur consequuntur, illo
                  nostrum nihil nisi tempora quidem nam?
                </p>
              </div>
              <div>
                <div className="stats   shadow  flex flex-col md:flex-row  overflow-hidden mt-10 ">
                  <div className="stat ">
                    <div className="stat-figure text-secondary ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current text-teal-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                  </div>
                  <div className="stat ">
                    <div className="stat-figure text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current text-teal-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title ">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                  </div>
                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current text-teal-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLayout;
