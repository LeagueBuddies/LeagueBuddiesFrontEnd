import Image from "next/image";
import heroImage from "../../public/images/blockletters.svg";

import Navbar from "../components/navbar/navbar";

export default function Home() {
  const hasAccount = false;
  const username = "Mr. FluffyPants";

  return (
    <>
      <Navbar hasAccount={hasAccount} username={username}/>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl text-center">
          The Best Place To Find League Teammates
        </h1>
        <p>some text</p>
        <div className="text-textColor py-2 w-48 bg-secondaryColor rounded text-center cursor-pointer">
          Find Buddies
        </div>
        <Image
          src={heroImage}
          alt="League Buddies in block letters"
          width={1000}
          height={105}
        />
      </main>
    </>
  );
}
// items-center is for main axis.
// justify-center is for cross axis.
