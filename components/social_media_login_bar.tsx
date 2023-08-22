import Image from "next/image";
import Link from "next/link";

const SocialMediaLoginBar = () => {
    return (
        <div className="flex items-center justify-end bg-black h-7 p-2 pr-10">
            <div className="ml-auto flex items-center space-x-2">
                <button><Image src="/images/logoGG.png" alt="" width={15} height={15} /></button>
                <button><Image src="/images/logoFB1.png" alt="" width={16} height={15} /></button>
                <Link href="/posts/login">
                    <span className="text-white "> Đăng ký/Đăng nhập </span>
                </Link>
                <Link href="#">
                    <span className="text-white ">Contact Us</span>
                </Link>
            </div>
        </div>
    );
}

export default SocialMediaLoginBar;
