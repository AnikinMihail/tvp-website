import { Yanone_Kaffeesatz } from "next/font/google";

const yanone_kaffeesatz = Yanone_Kaffeesatz({ subsets: ["cyrillic", "latin"] });

export default function Home() {
  return (
    <div>
      <div className="mt-6 flex h-48 w-full flex-row">
        <div className="h-full w-1/2 p-7">
          <div className="h-full w-full bg-red-500"></div>
        </div>
        <div className="h-full w-1/2">
          <h2 className="mb-7 text-5xl">Технологии виртуальных пространств</h2>
          <p>
            Любите играть в компьютерные игры? Слышали про VR и AR технологии?
            Хотели бы создать игру мечты, или быть может виртуальный мир?
            Профиль «Технологии виртуальных пространств» предоставляет
            возможность научиться создавать собственные жизнеспособные проекты в
            GameDev индустрии.
            <br />
            <br />
            <span>
              Ранее профиль назывался «Технологии визуального программирования»
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
