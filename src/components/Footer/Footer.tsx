import Image from "next/image";

const Footer = () => {

  return (
  <> 
    <footer className="copyright text-white">
    Made By<a href="https://github.com/Mil00Z/hr-net" className="text-blue-900 font-bold text-xl">Mil00z</a>with 
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={80}
          height={80}
          priority
        />
    </footer>
  </>
  );
};  
export default Footer