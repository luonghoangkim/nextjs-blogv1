import Layout from "../../components/layuot";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white p-6">
        <div className="bg-gray-100 p-6">
          <h2 className="text-2xl font-semibold">Về Chúng Tôi</h2>
          <p className="text-gray-700">
            Chào mừng bạn đến với Blog công nghệ! Chúng tôi đam mê về công nghệ và tác động của nó đối với cuộc sống của chúng ta.
          </p>
          <p className="text-gray-700">
            Chúng tôi là một đội ngũ những người đam mê công nghệ, những người viết bài và chuyên gia trong ngành yêu thích khám phá và chia sẻ những điều kỳ diệu của công nghệ với độc giả của chúng tôi.
          </p>
          <p className="text-gray-700">
            Mục tiêu của chúng tôi là làm cho các khái niệm công nghệ phức tạp trở nên dễ hiểu và thông tin về những đổi mới mới nhất trong thế giới công nghệ.
          </p>
        </div>
        <div className="bg-gray-100 p-6">
          <h3 className="text-lg font-semibold">Gặp Gỡ Đội Ngũ</h3>
          <div className="flex items-center space-x-4 mt-4"> 
            <div>
              <h4 className="text-md font-semibold">Chánh - Lương - Trường</h4>
              <p className="text-gray-700">Người Sáng Lập và Người Đam Mê Công Nghệ</p>
            </div>
          </div>
          {/* Lặp lại cấu trúc trên cho các thành viên khác của đội */}
        </div>
        <div className="bg-gray-100 p-6">
          <h3 className="text-lg font-semibold">Sứ Mệnh Của Chúng Tôi</h3>
          <p className="text-gray-700">
            Chúng tôi tin rằng công nghệ có sức mạnh biến cách chúng ta sống, làm việc và tương tác.
          </p>
          <p className="text-gray-700">
            Qua blog của chúng tôi, chúng tôi hướng đến cầu nối khoảng cách giữa công nghệ và người dùng bằng cách cung cấp thông tin và hiểu biết có giá trị.
          </p>
        </div>
        <div className="bg-gray-100 p-6">
          <h3 className="text-lg font-semibold">Liên Hệ Chúng Tôi</h3>
          <p className="text-gray-700">
            Nếu bạn có bất kỳ câu hỏi, phản hồi hoặc gợi ý nào, hãy liên hệ với chúng tôi thông qua trang liên hệ của chúng tôi.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
