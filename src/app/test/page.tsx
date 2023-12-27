const page = () => {
  return (
    <>
      <div className="m-14 2xl:m-auto   sm:min-h-screen md:h-screen lg:h-screen  text-black  p-6  max-w-[1500px] f">
        <div className="grid   w-full h-full  gap-3  grid-cols-2 grid-rows-5  md:grid-cols-3 md:grid-rows-5  lg:grid-cols-5 lg:grid-rows-5">
          <div className="col-span-2  md:col-span-1 md:row-start-3  lg:col-span-2 lg:row-span-3   ">
            <img
              className="h-full w-full object-cover rounded-2xl "
              src="https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className=" md:row-span-2 md:col-start-4 md:row-start-4  lg:col-span-1 lg:row-span-2  lg:row-start-4   ">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="md:row-span-2 md:col-span-1  lg:col-span-1 lg:row-span-1 lg:row-start-4 lg:col-start-2  ">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1703523888420-aa4c8a2cf027?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="col-span-2 md:row-span-2 md:col-span-3 lg:col-span-1 lg:row-span-1 lg:row-start-5 lg:col-start-2 ">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1701962541409-e2c1256a8574?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="col-start-1 row-start-1 col-span-2 row-span-2  sm:row-start-4 sm:col-span-2 sm:row-span-3  md:row-start-1 md:col-start-1 md:col-span-3 md:row-span-3 lg:col-span-3 lg:row-span-5 ">
            <img
              className="h-full w-full object-cover object-bottom rounded-2xl"
              src="https://images.unsplash.com/photo-1703372619010-ed887f803eab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
