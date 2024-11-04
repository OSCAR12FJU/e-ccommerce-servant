import ServantLogo from "../files/servant-logo.png"

const Footer = () =>{
    return(
<>
<footer className="bg-second dark:bg-gray-900">
    <div className="mx-auto w-full max-w-6xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={ServantLogo} className="h-8" alt="Flowbite Logo" />

  </a>
          </div>

          {/* ------------------------------ */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 ">
              <div>
                  <h2 className="mb-3 text-base font-semibold text-[#ffbe00] uppercase dark:text-white">Contactanos</h2>
                  <ul className="text-gray-300 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">(+54) 1123219302</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Servant@gmail.com</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-base font-semibold text-[#ffbe00] uppercase ">Categorias</h2>
                  <ul className="text-gray-300  font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Electonica</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Ropa de mujer</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center ">© 2024 <a href="https://flowbite.com/" className="hover:underline">Servant Argentina</a>. Todos los derechos reservados.
          </span>
      </div>
    </div>
</footer>

</>
    )
}

export default Footer;
