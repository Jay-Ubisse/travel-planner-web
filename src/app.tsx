import { MapPin, Calendar, ArrowRight } from "lucide-react";

export const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-home-bg bg-cover">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeie sua próxima viagem!
        </p>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder:text-zinc-400 w-40 outline-none"
            />
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="bg-lime-300 hover:bg-lime-400 flex items-center gap-2 text-lime-950 rounded-lg px-5 py-2 font-medium">
            <span>Continuar</span>
            <ArrowRight className="size-5 " />
          </button>
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com{" "}
          <a href="#" className="text-zinc-300 underline">
            nossos termos
          </a>{" "}
          de uso e{" "}
          <a href="" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
};
