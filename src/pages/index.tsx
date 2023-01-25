import Image from "next/image";
import Link from "next/link";
import { Days } from "../components/Days";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className="bg-[#80E1F7] antialiased">
      <div className="flex flex-col w-full h-full">
        <div
          className="w-full h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
          style={{ backgroundImage: `url('/fundodomar.jpg')` }}
        >
          <div className="flex flex-col w-screen h-full items-center justify-end text-white">
            <Image
              src="/nina.svg"
              width={400}
              height={400}
              alt=""
            />
            <h1 className="text-8xl font-bold">Nina</h1>
            <h4 className="text-2xl font-bold">2 anos</h4>
            <div>
              <svg
                width={20}
                height={20}
                fill="none"
                stroke="currentColor"
                className="w-10 h-10"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <Header />
        <div
          className="w-full h-[55px] sm:h-[70px] sm:bg-auto bg-repeat-x bg-cover"
          style={{ backgroundImage: `url(/pattern01.webp)` }}
        ></div>
        <div
          id="message"
          className="flex flex-col px-3 sm:px-8 w-full h-screen items-center justify-center bg-cover bg-no-repeat bg-relative"
          style={{ backgroundImage: `url(/wave_pattern.png)` }}
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/fish.svg"
              width={100}
              height={100}
              alt="Peixinho piscando"
              className="mb-8"
            />
            <h1 className="text-5xl font-semibold mb-12 text-center text-[#f96b9e]">
              Mensagem da Nina
            </h1>
            <div className="flex flex-col sm:w-[50%] text-center text-2xl ">
              <span>
                Meu aniversário está chegando e a turma do Baby Shark já está
                preparada. Venha fazer parte deste dia especial e curtir este momento no
                fundo do mar. Conto com você lá! 🌊🦈
              </span>
            </div>
          </div>
        </div>
        <div
          id="day"
          className="flex flex-col px-3 sm:px-8 w-full items-center justify-center bg-cover bg-no-repeat bg-relative"
          style={{ backgroundImage: `url(/wave_pattern.png)` }}
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/family-shark.png"
              width={320}
              height={320}
              alt=""
            />
            <h1 className="text-5xl font-semibold mb-12 text-[#f96b9e] drop-shadow-[2px 2px 2px #05b0cc] shadow-black">
              O grande dia
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-10">
              <div className="flex flex-col gap-10">
                <Days
                  title="Quando"
                  description="Sábado, 25 de Fevereiro de 2023 a partir de 16:30"
                >
                  <path d="M47.2,18.26A10.95,10.95,0,0,0,39.07,0a10.85,10.85,0,0,0-7.24,2.74,23.38,23.38,0,0,0-13.66,0A10.93,10.93,0,0,0,0,11a10.87,10.87,0,0,0,2.8,7.31,23.45,23.45,0,0,0-1,6.65,23,23,0,0,0,5,14.43l-2.79,3.1a4.61,4.61,0,0,0,.29,6.34,4.19,4.19,0,0,0,3,1.22h.12a4.59,4.59,0,0,0,3.29-1.52l3-3.29a23.21,23.21,0,0,0,23-.27l3.2,3.56A4.62,4.62,0,0,0,43.23,50h.12a4.19,4.19,0,0,0,3-1.22,4.62,4.62,0,0,0,.3-6.34l-3.17-3.53a23.07,23.07,0,0,0,4.69-14A23.4,23.4,0,0,0,47.2,18.26ZM39.07,2a9,9,0,0,1,7.36,14.14A23.24,23.24,0,0,0,34,3.53,8.93,8.93,0,0,1,39.07,2ZM2,11A9,9,0,0,1,16,3.53,23.24,23.24,0,0,0,3.57,16.09,8.93,8.93,0,0,1,2,11ZM9.33,47.17a2.64,2.64,0,0,1-1.89.88,2.3,2.3,0,0,1-1.68-.65,2.63,2.63,0,0,1-.23-3.66l2.63-2.91.46.48a24.36,24.36,0,0,0,3.44,2.84Zm35.86-3.43A2.65,2.65,0,0,1,45,47.4a2.3,2.3,0,0,1-1.68.65,2.66,2.66,0,0,1-1.9-.88l-3-3.33a24.57,24.57,0,0,0,3-2.53c.28-.29.56-.58.83-.88ZM25,46.15A21.24,21.24,0,1,1,46.21,24.91,21.25,21.25,0,0,1,25,46.15Z"></path>
                  <path d="M25,13.89a1,1,0,0,0-1,1v9.78l-2.8,4.85a1,1,0,0,0,1.7,1l2.93-5.07a1.05,1.05,0,0,0,.13-.49v-10A1,1,0,0,0,25,13.89Z"></path>
                  <path d="M42.92,24.91a17.82,17.82,0,0,0-3.21-10.23,1,1,0,0,0-1.36-.25,1,1,0,0,0-.24,1.36,15.85,15.85,0,0,1,2.82,8.14H40a1,1,0,0,0,0,2h.91A16,16,0,0,1,26,40.84v-.91a1,1,0,0,0-2,0v.91a16,16,0,0,1-14.95-15H10a1,1,0,0,0,0-2H9.07A16,16,0,0,1,24,9v.91a1,1,0,1,0,2,0V9a15.33,15.33,0,0,1,3.15.51,1,1,0,0,0,.51-1.89A18.13,18.13,0,0,0,25,7,17.92,17.92,0,1,0,42.92,24.91Z"></path>
                  <path d="M36.31,13.65a1,1,0,0,0,.7.29,1,1,0,0,0,.68-.28,1,1,0,0,0,0-1.38l0,0a1,1,0,0,0-1.38,1.38Z"></path>
                </Days>

                <Days
                  title="Onde"
                  description="Esporte Clube Santa Sofia - Rua Cezira de Queiroz, Pedreira
                    - SP"
                >
                  <path
                    d="m28.28 17.76a10.46 10.46 0 1 0 -10.46 10.41 10.45 10.45 0 0 0 10.46-10.41zm-10.46 8.43a8.43 8.43 0 1 1 8.46-8.43 8.46 8.46 0 0 1 -8.46 8.43z"
                    transform="translate(0 -.02)"
                  ></path>
                  <path
                    d="m8.94 9a1 1 0 0 0 .67-.26 12.32 12.32 0 0 1 13.1-2.13 1 1 0 0 0 1.29-.55 1 1 0 0 0 -.51-1.3 14.3 14.3 0 0 0 -15.22 2.48 1 1 0 0 0 .67 1.76z"
                    transform="translate(0 -.02)"
                  ></path>
                  <g clip-path="url(#a)">
                    <path
                      d="m6.55 10.76a1 1 0 0 0 -1.35.42 14.2 14.2 0 0 0 -1.62 6.58 1 1 0 1 0 2 0 12.13 12.13 0 0 1 1.42-5.66 1 1 0 0 0 -.42-1.34z"
                      transform="translate(0 -.02)"
                    ></path>
                    <path
                      d="m31.9 29c2.48-4.83 3.74-8.61 3.74-11.26a17.82 17.82 0 0 0 -35.64.02c0 9.48 16.33 30.83 17 31.73a1 1 0 0 0 1.58 0s1.3-1.69 3.13-4.25a10.51 10.51 0 1 0 10.19-16.24zm-11.21 14.27c-1.2 1.7-2.21 3.08-2.87 4-1.41-1.9-4.51-6.15-7.57-11-5.4-8.52-8.25-14.91-8.25-18.51a15.83 15.83 0 0 1 31.65 0c0 2.48-1.34 6.24-4 11.19a10.52 10.52 0 0 0 -9.65 10.45 10.37 10.37 0 0 0 .74 3.87zm9.79 4.62a8.49 8.49 0 1 1 8.52-8.49 8.52 8.52 0 0 1 -8.52 8.49z"
                      transform="translate(0 -.02)"
                    ></path>
                  </g>
                  <path
                    d="m37.46 37.22a1 1 0 0 0 -.81-.67l-3.65-.55-1.62-3.27a1 1 0 0 0 -.9-.55 1 1 0 0 0 -.89.55l-1.59 3.27-3.62.53a1 1 0 0 0 -.81.67 1 1 0 0 0 .25 1l2.62 2.55-.61 3.59a1 1 0 0 0 1.44 1l3.24-1.7 3.25 1.7a.92.92 0 0 0 .46.11 1 1 0 0 0 1-1.16l-.61-3.59 2.62-2.55a1 1 0 0 0 .25-1zm-4.64 2.51a1 1 0 0 0 -.29.88l.37 2.12-1.92-1a1 1 0 0 0 -.93 0l-1.92 1 .37-2.12a1 1 0 0 0 -.29-.88l-1.55-1.5 2.15-.31a1 1 0 0 0 .75-.55l1-1.93 1 1.93a1 1 0 0 0 .75.55l2.15.31z"
                    transform="translate(0 -.02)"
                  ></path>
                </Days>
                <Days
                  title="Lembrete"
                  description="Traga sua bebida alcoólica preferida"
                >
                  <path d="M47.2,18.26A10.95,10.95,0,0,0,39.07,0a10.85,10.85,0,0,0-7.24,2.74,23.38,23.38,0,0,0-13.66,0A10.93,10.93,0,0,0,0,11a10.87,10.87,0,0,0,2.8,7.31,23.45,23.45,0,0,0-1,6.65,23,23,0,0,0,5,14.43l-2.79,3.1a4.61,4.61,0,0,0,.29,6.34,4.19,4.19,0,0,0,3,1.22h.12a4.59,4.59,0,0,0,3.29-1.52l3-3.29a23.21,23.21,0,0,0,23-.27l3.2,3.56A4.62,4.62,0,0,0,43.23,50h.12a4.19,4.19,0,0,0,3-1.22,4.62,4.62,0,0,0,.3-6.34l-3.17-3.53a23.07,23.07,0,0,0,4.69-14A23.4,23.4,0,0,0,47.2,18.26ZM39.07,2a9,9,0,0,1,7.36,14.14A23.24,23.24,0,0,0,34,3.53,8.93,8.93,0,0,1,39.07,2ZM2,11A9,9,0,0,1,16,3.53,23.24,23.24,0,0,0,3.57,16.09,8.93,8.93,0,0,1,2,11ZM9.33,47.17a2.64,2.64,0,0,1-1.89.88,2.3,2.3,0,0,1-1.68-.65,2.63,2.63,0,0,1-.23-3.66l2.63-2.91.46.48a24.36,24.36,0,0,0,3.44,2.84Zm35.86-3.43A2.65,2.65,0,0,1,45,47.4a2.3,2.3,0,0,1-1.68.65,2.66,2.66,0,0,1-1.9-.88l-3-3.33a24.57,24.57,0,0,0,3-2.53c.28-.29.56-.58.83-.88ZM25,46.15A21.24,21.24,0,1,1,46.21,24.91,21.25,21.25,0,0,1,25,46.15Z"></path>
                  <path d="M25,13.89a1,1,0,0,0-1,1v9.78l-2.8,4.85a1,1,0,0,0,1.7,1l2.93-5.07a1.05,1.05,0,0,0,.13-.49v-10A1,1,0,0,0,25,13.89Z"></path>
                  <path d="M42.92,24.91a17.82,17.82,0,0,0-3.21-10.23,1,1,0,0,0-1.36-.25,1,1,0,0,0-.24,1.36,15.85,15.85,0,0,1,2.82,8.14H40a1,1,0,0,0,0,2h.91A16,16,0,0,1,26,40.84v-.91a1,1,0,0,0-2,0v.91a16,16,0,0,1-14.95-15H10a1,1,0,0,0,0-2H9.07A16,16,0,0,1,24,9v.91a1,1,0,1,0,2,0V9a15.33,15.33,0,0,1,3.15.51,1,1,0,0,0,.51-1.89A18.13,18.13,0,0,0,25,7,17.92,17.92,0,1,0,42.92,24.91Z"></path>
                  <path d="M36.31,13.65a1,1,0,0,0,.7.29,1,1,0,0,0,.68-.28,1,1,0,0,0,0-1.38l0,0a1,1,0,0,0-1.38,1.38Z"></path>
                </Days>
              </div>
              <div className="flex flex-col">
                <Days title="Mapa do Local">
                  <path
                    d="m28.28 17.76a10.46 10.46 0 1 0 -10.46 10.41 10.45 10.45 0 0 0 10.46-10.41zm-10.46 8.43a8.43 8.43 0 1 1 8.46-8.43 8.46 8.46 0 0 1 -8.46 8.43z"
                    transform="translate(0 -.02)"
                  ></path>
                  <path
                    d="m8.94 9a1 1 0 0 0 .67-.26 12.32 12.32 0 0 1 13.1-2.13 1 1 0 0 0 1.29-.55 1 1 0 0 0 -.51-1.3 14.3 14.3 0 0 0 -15.22 2.48 1 1 0 0 0 .67 1.76z"
                    transform="translate(0 -.02)"
                  ></path>
                  <g clip-path="url(#a)">
                    <path
                      d="m6.55 10.76a1 1 0 0 0 -1.35.42 14.2 14.2 0 0 0 -1.62 6.58 1 1 0 1 0 2 0 12.13 12.13 0 0 1 1.42-5.66 1 1 0 0 0 -.42-1.34z"
                      transform="translate(0 -.02)"
                    ></path>
                    <path
                      d="m31.9 29c2.48-4.83 3.74-8.61 3.74-11.26a17.82 17.82 0 0 0 -35.64.02c0 9.48 16.33 30.83 17 31.73a1 1 0 0 0 1.58 0s1.3-1.69 3.13-4.25a10.51 10.51 0 1 0 10.19-16.24zm-11.21 14.27c-1.2 1.7-2.21 3.08-2.87 4-1.41-1.9-4.51-6.15-7.57-11-5.4-8.52-8.25-14.91-8.25-18.51a15.83 15.83 0 0 1 31.65 0c0 2.48-1.34 6.24-4 11.19a10.52 10.52 0 0 0 -9.65 10.45 10.37 10.37 0 0 0 .74 3.87zm9.79 4.62a8.49 8.49 0 1 1 8.52-8.49 8.52 8.52 0 0 1 -8.52 8.49z"
                      transform="translate(0 -.02)"
                    ></path>
                  </g>
                  <path
                    d="m37.46 37.22a1 1 0 0 0 -.81-.67l-3.65-.55-1.62-3.27a1 1 0 0 0 -.9-.55 1 1 0 0 0 -.89.55l-1.59 3.27-3.62.53a1 1 0 0 0 -.81.67 1 1 0 0 0 .25 1l2.62 2.55-.61 3.59a1 1 0 0 0 1.44 1l3.24-1.7 3.25 1.7a.92.92 0 0 0 .46.11 1 1 0 0 0 1-1.16l-.61-3.59 2.62-2.55a1 1 0 0 0 .25-1zm-4.64 2.51a1 1 0 0 0 -.29.88l.37 2.12-1.92-1a1 1 0 0 0 -.93 0l-1.92 1 .37-2.12a1 1 0 0 0 -.29-.88l-1.55-1.5 2.15-.31a1 1 0 0 0 .75-.55l1-1.93 1 1.93a1 1 0 0 0 .75.55l2.15.31z"
                    transform="translate(0 -.02)"
                  ></path>
                </Days>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5627452994995!2d-46.90208528520132!3d-22.74448803781758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dea13f7eb4ab%3A0xf3b8bf39bafd4a05!2sEsporte%20Clube%20Santa%20Sofia!5e0!3m2!1spt-BR!2sbr!4v1673636365070!5m2!1spt-BR!2sbr"
                  className="border-0 sm:w-[400px] h-[300px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="presence"
          className="flex mt-12 flex-col w-full h- items-center justify-center bg-cover bg-no-repeat bg-relative"
          style={{ backgroundImage: `url(/wave_pattern.png)` }}
        >
          <div
            className="w-full h-full bg-no-repeat bg-contain bg-left-bottom"
            style={{ backgroundImage: `url(/ocean_floor_left.webp)` }}
          >
            <div
              className="w-full h-full bg-no-repeat bg-contain bg-right-bottom"
              style={{ backgroundImage: `url(/ocean_floor_right.webp)` }}
            >
              <div
                className="bg-repeat-x bg-right-bottom pb-60"
                style={{ backgroundImage: `url(/ocean_floor_desktop.webp)` }}
              >
                <div className="flex flex-col px-3 pt-20 sm:px-8 items-center justify-center">
                  <Image
                    src="/baby_shark_yellow.webp"
                    width={130}
                    height={130}
                    alt="baby shark yellow"
                    className="mb-8"
                  />
                  <div className="flex flex-col gap-4 text-center text-2xl">
                    <h1 className="text-5xl items font-bold mb-4 text-[#f96b9e]">
                      Confirmar Presença até
                    </h1>
                    <div
                      className="bg-no-repeat bg-center sm:w-full h-[100px]"
                      style={{ backgroundImage: `url(/ribbon.svg)` }}
                    >
                      <span className="flex text-2xl items-center justify-center top-4 relative">
                        16/02/2023
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/presence"
                    type="button"
                    className="py-2 px-4 mt-10 w-2/4 bg-[#f96b9e] hover:bg-pink-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                  >
                    Eu vou
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
