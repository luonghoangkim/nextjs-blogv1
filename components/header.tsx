import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center ">  
      <Image className="" src={'/images/logi.jpg'} alt={""} width={"60"} height={"70"} />
      <h1 className="text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-2 mt-2">
        <Link href='/' style={{ textDecoration: "none" }}> Blog công nghệ</Link>
      </h1>
    </div>
  );
}

export default Header;
