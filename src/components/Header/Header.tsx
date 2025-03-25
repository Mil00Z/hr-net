import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
  <> 
    <header className="title">
      <Link href="/">
          {/* <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            /> */}
            <Image
              className="logo"
              src="/logo.png"
              alt="HR-Net logo"
              width={180}
              height={38}
              priority
            />
          <h1 className="text-white">HRnet</h1>
        </Link>
    </header>
  </>
  );
};  

export default Header;