import Footer from "./footer";
import Header from "./header";
import HorizontalMenu from "./horizontalMenu"; 
import SocialMediaLoginBar from "./social_media_login_bar";

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const containerStyle = {
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: '40px',  
        paddingLeft: '40px', 
      };
      return (
        <div style={{ minHeight: '100vh', }}> 
          <SocialMediaLoginBar/>
          <Header/>  
          <HorizontalMenu/>
          <div style={containerStyle}>{children}</div>
          <Footer/>
        </div>
      );
}

export default Layout;