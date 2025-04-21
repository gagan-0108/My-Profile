import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="text-gray-400">No Terms & Only My Conditions. </p>
        </div>
        
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-medium">
              © {new Date().getFullYear()} Gagan Deep Yadav
            </p>
            <p className="text-base text-gray-400 -mt-1">
              No rights will be reserved. I'm gonna exploit you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
