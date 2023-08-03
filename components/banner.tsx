import Image from "next/image";

const Banner = () => {
    return ( 
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
            <Image
                src="/images/banner1.jpg"  
                layout="fill" 
                objectFit="cover" // Tùy chỉnh vị trí và độ tỉ lệ hình ảnh
                alt="banner"
            /> 
            </div>
    )
}

export default Banner;