import Image from "next/image";

const Footer = () => {

  return (
  <> 
    <footer className="copyright">
    Made By<a href="https://github.com/Mil00Z/hr-net" className="text-blue-900 font-semibold">Mil00z</a>with 
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={90}
          height={90}
          priority
        />
    </footer>
  </>
  );
};  
export default Footer