import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-5 text-white flex flex-col px-5  ">
      <Link href="tel:+380637320087" passHref>
        <span>+380 (63) 732-00-87 </span>
      </Link>

      <Link href="mailto:boiko.vlad91@gmail.com">
        <span>boiko.vlad91@gmail.com </span>
      </Link>
    </div>
  );
};

export default Footer;
