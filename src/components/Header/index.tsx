import Link from "next/link";

export function Header() {

  return (
    <header className="w-full bg-[#80E1F7] px-8">
      <div className="flex p-3 items-center justify-between">
        <Link
          href="#message"
          className=" 
            font-bold
            border-transparent
            border-b-2
            rounded-none 
            hover:border-b-2
            hover:text-pink-500
            hover:border-pink-500
          "
        >
          Menssagem
        </Link>
        <Link
          href="#day"
          className=" 
            font-bold
            border-transparent
            border-b-2
            rounded-none 
            hover:border-b-2
            hover:text-pink-500
            hover:border-pink-500
          "
        >
          O grande dia
        </Link>
        <Link
          href="#presence"
          className=" 
            font-bold
            border-transparent
            border-b-2
            rounded-none 
            hover:border-b-2
            hover:text-pink-500
            hover:border-pink-500
          "
        >
          Presença
        </Link>
      </div>
    </header>
  );
}
