import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "@/app/components/NavBar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
       <NavBar />
    <Hero />
    <div>
      <h3 className="bento-title">hello</h3>
      <p className="three-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium facere natus aperiam nobis ea corporis quae eum esse molestiae minus, fuga quo nulla reprehenderit fugiat? Expedita aspernatur enim ipsam.</p>
    </div>
    <div>
      <h3>hello</h3>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium facere natus aperiam nobis ea corporis quae eum esse molestiae minus, fuga quo nulla reprehenderit fugiat? Expedita aspernatur enim ipsam.</p>
    </div><div>
      <h3>hello</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium facere natus aperiam nobis ea corporis quae eum esse molestiae minus, fuga quo nulla reprehenderit fugiat? Expedita aspernatur enim ipsam.</p>
    </div><div>
      <h3>hello</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium facere natus aperiam nobis ea corporis quae eum esse molestiae minus, fuga quo nulla reprehenderit fugiat? Expedita aspernatur enim ipsam.</p>
    </div>
    </main>
  );
}
