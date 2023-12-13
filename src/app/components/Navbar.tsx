import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <div className="navbar bg-base-100 text-white font-semibold ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Arquit moderna</a>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link href={"/"}>INICIO</Link>
            </li>
            <li>
              <Link href={"/servicios"}>SERVICIOS</Link>
            </li>
            <li>
              <Link href={"/nosotros"}>NOSOTROS</Link>
            </li>
            <li>
              <Link href={"/testimonios"}>TESTIMONIOS</Link>
            </li>
            <li>
              <Link href={"/contacto"}>CONTACTO</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none"></ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
