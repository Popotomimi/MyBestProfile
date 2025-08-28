import MobileMenu from "./_components/Navbar/MobileMenu";
import Navbar from "./_components/Navbar/Navbar";
import Photo from "./_components/Photo/Photo";

export default function Home() {
  return (
    <div>
      {/* Navbar desktop */}
      <nav className="hidden md:block">
        <Navbar />
      </nav>

      {/* Navbar + Avatar mobile */}
      <div className="md:hidden">
        <MobileMenu />
        <div className="mt-28"></div>
        <Photo />
      </div>

      {/* Avatar para desktop */}
      <section className="hidden md:flex justify-center mt-10">
        <Photo />
      </section>
    </div>
  );
}
