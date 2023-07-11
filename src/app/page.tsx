import Image from "next/image";
import bgImage from "../../public/images/leaguebg.png";
import heroImage from "../../public/images/blockletters.svg";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/navbar/footer"

export default function Home() {
  const hasAccount = false;
  const username = "Mr. FluffyPants";

  return (
    <>
      <Navbar hasAccount={hasAccount} username={username} />
      <main className="font-sans flex flex-col items-center justify-center h-screen bg-[url('/images/leaguebg.png')] bg-cover bg-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl m-4 text-center max-w-2xl font-semibold">
          The Best Place To Find League Teammates
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xlg m-4 text-center max-w-2xl">
          Level up your League of Legends experience with League Buddies.
          Connect, team up, and play with like-minded players who share your
          passion for the game. 
          Join now and take your gameplay to the next
          level.
        </p>
        <button className="font-orbit text-lg clippedButton m-4 text-textColor py-2 w-48 bg-secondaryColor text-center cursor-pointer hover:bg-darkSecondary ease-in-out duration-300">
         Find Buddies
        </button>
        <div className="ml-4 mr-4 mt-16 mb-4 hidden sm:block">
          <Image
            src={heroImage}
            alt="League Buddies in block letters"
            width={1000}
            height={105}
          />
        </div>
        </main>
        <Footer 
        home="#home" 
        about="#about" 
        contact="#contact" 
        twitter="http://twitter.com/LeagueBuddies" 
        github="https://github.com/LeagueBuddies"
        facebook="http://facebook.com/youraccount"
        linkedin="http://linkedin.com/youraccount"
      />
    </>
  );
}
// items-center is for main axis.
// justify-center is for cross axis.
