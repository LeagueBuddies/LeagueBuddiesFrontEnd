import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  home: string;
  about: string;
  contact: string;
  twitter: string;
  github: string;
  facebook: string;
  linkedin: string;
}

const Footer: React.FC<Props> = ({ home, about, contact, twitter, github, facebook, linkedin,}) => {
  return (
    <footer className="w-full flex items-center bg-footer text-white">
      <div className="mx-auto w-full max-w-[1200px] flex flex-col justify-between px-6">
        <div className="flex items-center justify-start text-4xl font-bold py-4">
          LEAGUE BUDDIES
        </div>
        <div className="flex items-end justify-between py-4 mt-28">
          <div className="space-x-4">
            <a href={home} className="text-lg hover:underline">Home</a>
            <a href={about} className="text-lg hover:underline">About Us</a>
            <a href={contact} className="text-lg hover:underline">Contact Us</a>
          </div>
          <div className="flex space-x-4 socialicon">
            <div className="min-w-[20px]">
              <a href={twitter}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            </div>
            <div className="min-w-[20px]">
              <a href={github}><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </div>
            <div className="min-w-[20px]">
              <a href={facebook}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </div>
            <div className="min-w-[20px]">
              <a href={linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
            <div>
              <p className="text-sm ml-4 text-footertext">© LeagueBuddies.com, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
