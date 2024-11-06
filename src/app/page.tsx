import { IconStack2 } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="container p-4">
      <nav className="flex items-center justify-center p-4 mb-6 rounded-full border border-border shadow-lg">
        <h2 className="font-bold text-lg">It's Luthfi</h2>
      </nav>
      <main className="p-4">
        <header className="grid grid-cols-2 gap-4 items-center text-primary mb-12">
          <div className="h-40 w-40 rounded-full bg-primary/30"></div>
          <h1 className="text-xl">Hi, I'm <br/><span className="font-bold">Muhammad Luthfi Fahrezi</span></h1>
          <p className="col-span-2 text-xl mt-4">
            Dedicated to building websites that 
            <span className="text-blue-700"> engage</span>, 
            <span className="text-blue-700"> perform</span>, 
            and <span className="text-blue-700"> inspire</span>.
          </p>
          <p className="col-span-2 text-xl">
            Experienced and passionate Front-end Developer with more than 4 years of expertise. 
            Enjoy challenges, embraces learning, and adapts easily.
          </p>
        </header>
        <div>
          <h4 className="flex items-center gap-2 text-primary">
            <IconStack2 size={32} />
            <span className="font-bold">Stacks</span>
          </h4>
        </div>
      </main>
    </div>
  );
}
