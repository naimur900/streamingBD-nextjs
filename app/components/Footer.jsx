import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <Image
          src="/images/streamingBDIcon.svg"
          height={"75"}
          width={"75"}
          alt=""
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
            <Image
              src="/images/whatsAppIcon.svg"
              height={"35"}
              width={"35"}
              alt=""
            />
          </a>
          <a>
            <Image
              src="/images/facebookIcon.svg"
              height={"35"}
              width={"35"}
              alt=""
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
