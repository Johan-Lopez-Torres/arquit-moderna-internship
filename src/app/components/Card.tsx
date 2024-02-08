import DataEmployee from "@data/Equipo.json";
import DataCustomers from "@data/Testimonios.json";
import DataService from "@data/Servicios.json";
import Link from "next/link";

//data de los clientes

export const CardCustomer = () => {
  const dataCustomer = DataCustomers.map((customers, index) => (
    <div key={index} className="card w-80 bg-gray-800 shadow-xl ">
      <div className="avatar flex justify-center mt-7 h-44">
        <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            alt=""
            className="w-full h-full "
            src={customers.image}
            key={index}
          />
        </div>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title font-extrabold">{customers.name} </h2>
        <div className="divider divider-accent p-0 m-0"></div>

        <p>{customers.description} </p>
      </div>
    </div>
  ));
  return <>{dataCustomer}</>;
};

//data de los trabajadores
export const CardEmployee = () => {
  const dataEmployee = DataEmployee.map((employee, index) => (
    <div
      key={index}
      className=" card w-64 bg-gray-800   shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] 
     transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-zinc-200 duration-200 "
    >
      <div className="card card-body pt-4 pb-2 bg-slate-800 rounded-lg rounded-b-none items-center">
        <h2 className="card-title ">{employee.name} </h2>
      </div>
      <div className="avatar justify-center mt-5   ">
        <div className="w-44 rounded-full  ring-indigo-600 ring-[5px] 	 ring-offset-base-100 ring-offset-4">
          <img
            alt=""
            className="w-full h-full"
            src={employee.image}
            key={index}
          />
        </div>
      </div>

      <div className="card-body items-center  text-center mx-0 px-0 pt-5 pb-3">
        <p className="text-left  w-5/6  text-sm leading-6">
          {employee.description}
        </p>
        <a href="https://facebook.com" target="_blank"></a>
      </div>
    </div>
  ));
  return <>{dataEmployee}</>;
};

export const CardService = () => {
  const dataService = DataService.map((service, index) => (
    <Link key={index} href={`${service.endpoint}   `}>
      <div
        key={index}
        className="card  bg-gray-800 shadow-xl w-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 hover:text-zinc-200 duration-200      border-teal-600 hover:border-4 "
      >
        <figure className=" ">
          <img
            src={service.image}
            alt="Movie"
            key={index}
            className="w-full h-full"
          />
        </figure>
        <div className="card-body p-5 ">
          <h2 className="card-title text-lg leading-6 text-center justify-center">
            {service.name}{" "}
          </h2>
          <p className="leading-6 text-sm">{service.description} </p>
          <div className="flex flex-row justify-evenly">
            <div className="badge badge-accent">ghost</div>
            <div className="badge badge-secondary">ghost</div>
          </div>
        </div>
      </div>
    </Link>
  ));
  return <>{dataService}</>;
};

export const CardServiceLanding = () => {
  const dataService = DataService.map((service, index) => (
    <Link key={index} href={`${service.endpoint}   `}>
      <div className="card  bg-base-100 shadow-xl w-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-zinc-200 duration-200      border-teal-600 hover:border-4 rounded-none ">
        <figure className=" ">
          <img
            src={service.image}
            alt="Movie"
            key={index}
            className="w-full h-full hover:opacity-70  "
          />
        </figure>
        <div className="card-body p-5  ">
          <h2 className="card-title text-base leading-6 text-center justify-center ">
            {service.name}{" "}
          </h2>
        </div>
      </div>
    </Link>
  ));
  return <>{dataService}</>;
};
