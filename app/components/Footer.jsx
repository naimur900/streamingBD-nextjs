const Footer = () => {
  return (
    <footer id="footer" className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <img
          className="w-16"
          src="./images/streamingBDIcon.svg"
          alt=""
          srcset=""
        />
        <p>
          StreamingBD Ltd.
          <br />
          Providing reliable service since 2016
        </p>
      </aside>
      <nav className="flex flex-col items-start text-white">
        <h6 className="footer-title ">Social</h6>
        <div className="flex justify-around items-center gap-4">
          <a
            target="_blank"
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+8801521566835"
          >
            <img
              src="./images/whatsAppIcon.svg"
              className="w-8"
              alt=""
              srcset=""
            />
          </a>
          <a>
            <img
              src="./images/facebookIcon.svg"
              className="w-8"
              alt=""
              srcset=""
            />
          </a>
        </div>
        <span className="flex gap-2 my-4">
          <h1>Contact:</h1>
          <a href="tel:+880-1521566835">+8801521566835</a>
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
