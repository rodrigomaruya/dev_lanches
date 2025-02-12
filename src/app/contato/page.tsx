import { Container } from "@/components/container";

export default function Contato() {
  return (
    <Container>
      <div className="h-[calc(100vh-125px)] pt-24 w-full flex flex-col items-center ">
        <h1 className="font-bold text-slate-400 text-xl md:text-3xl mt-9 mb-4">
          Contato
        </h1>
        <form className="flex flex-col items-center justify-center py-6 px-6 w-full max-w-2xl border-2 rounded-md shadow-sm">
          <div className="flex flex-col w-full gap-2 mb-4">
            <label>Seu nome completo</label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              className="border-2 rounded-md px-2 py-3"
            />
          </div>
          <div className="flex flex-col w-full gap-2 mb-4">
            <label>Seu email</label>
            <input
              type="text"
              placeholder="Digite seu email..."
              className="border-2 rounded-md px-2 py-3"
            />
          </div>
          <div className="flex flex-col w-full gap-2 mb-4">
            <label>Sua mensagem</label>
            <textarea
              placeholder="Escreva sua mensagem..."
              className="border-2 rounded-md px-2 py-3 h-40 resize-none"
            ></textarea>
          </div>
          <button className="bg-blue-500 w-full rounded-md text-white font-bold py-2">
            Enviar mensagem
          </button>
        </form>
      </div>
    </Container>
  );
}
