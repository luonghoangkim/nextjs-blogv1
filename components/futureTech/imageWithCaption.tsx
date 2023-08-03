import { useState } from 'react'; 
import Image from 'next/image';
import Container from '../../components/container';

const fonttitle = 'absolute bottom-0 left-0 right-0 px-2 py-1 text-white text-center font-bold';

const ImageWithCaption = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
  
    const handleMouseEnter = (imageNumber: number) => {
      if (imageNumber === 1) {
        setIsHovered1(true);
      } else if (imageNumber === 2) {
        setIsHovered2(true);
      } else if (imageNumber === 3) {
        setIsHovered3(true);
      } else if (imageNumber === 4) {
        setIsHovered4(true);
      }
    };
  
    const handleMouseLeave = (imageNumber: number) => {
      if (imageNumber === 1) {
        setIsHovered1(false);
      } else if (imageNumber === 2) {
        setIsHovered2(false);
      } else if (imageNumber === 3) {
        setIsHovered3(false);
      } else if (imageNumber === 4) {
        setIsHovered4(false);
      }
    };
  
    const getImageStyle = (isHovered: boolean) => {
        const scale = isHovered ? 1.05 : 1;
        const transformOrigin = isHovered ? '50% 50%' : 'initial';
        return {
          transform: `scale(${scale})`,
          transformOrigin,
          transition: 'transform 0.2s', // Thêm hiệu ứng mượt mà khi zoom
          padding: '8px', // Thêm padding để tránh bị lồi ra ngoài
        };
      };
  return (
    <Container>
      <div className="flex h-100">
        <div
          className="relative w-1/2 h-100"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          style={getImageStyle(isHovered1)}
        >
          <Image className="w-full h-full object-cover" src={'/images/futureP.png'} alt="" width={200} height={150} />
          <h2 className={fonttitle}>3 xu thế công nghệ trong tương lai</h2>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="relative h-60  ml-1"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          style={getImageStyle(isHovered2)}>
            <Image className="w-full h-full object-cover" src={'/images/futureP1.jpg'} alt="" width={200} height={200} />
            <h2 className={fonttitle}>VR - AR công nghệ tương lai</h2>
          </div>
          <div className="flex mt-1 ml-1">
            <div className="relative h-60 w-1/2 mr-1"
             onMouseEnter={() => handleMouseEnter(3)}
             onMouseLeave={() => handleMouseLeave(3)}
             style={getImageStyle(isHovered3)}>
              <Image className="w-full h-full object-cover" src={'/images/futureP2.jpg'} alt="" width={200} height={200} />
              <h2 className={fonttitle}>AI Trí tuệ nhân tạo là gì</h2>
            </div>
            <div className="relative h-60 w-1/2 ml-1"
             onMouseEnter={() => handleMouseEnter(4)}
             onMouseLeave={() => handleMouseLeave(4)}
             style={getImageStyle(isHovered4)}>
              <Image className="w-full h-full object-cover" src={'/images/futureP3.jpg'} alt="" width={200} height={200} />
              <h2 className={fonttitle}>Chíp bán dẫn ...</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageWithCaption;
