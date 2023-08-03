import Footer from "./footer";
import Header from "./header";
import HorizontalMenu from "./horizontalMenu";

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const containerStyle = {
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: '40px', // Thay đổi giá trị thành 40px (hoặc bất kỳ giá trị nào bạn muốn)
        paddingLeft: '40px', // Thay đổi giá trị thành 40px (hoặc bất kỳ giá trị nào bạn muốn)
        // Các thuộc tính khác nếu cần
      };
      return (
        <div style={{ minHeight: '100vh', padding: '0 40px' }}>
          {/* Các thuộc tính CSS custom */}
          <Header/>
          <HorizontalMenu/>
          <div style={containerStyle}>{children}</div>
          <Footer/>
        </div>
      );
}

export default Layout;