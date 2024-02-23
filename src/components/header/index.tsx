export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 w-full font-['Poppins']">
      <h1 className="w-1/5 font-extrabold text-white text-3xl px-8">
        FREEMONT
      </h1>
      <ul className="flex justify-between w-1/3 font-bold text-white cursor-pointer mr-8 text-lg">
        <li className="hover:text-primary">
          O Carro
        </li>
        <li className="hover:text-primary">
          Segurança
        </li>
        <li className="hover:text-primary">
          Extra
        </li>
        <li className="hover:text-primary">
          Contato
        </li>
      </ul>
    </header>
  )
} 
