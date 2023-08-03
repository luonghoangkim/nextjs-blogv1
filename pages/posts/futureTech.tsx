import Head from "next/head";
import Layout from "../../components/layuot"; 
import ImageWithCaption from "../../components/futureTech/imageWithCaption";


const FutureTech = () => {
  return (
    <Layout>
        <Head>
          <title>Công nghệ tương lai</title>
        </Head>
        <ImageWithCaption/>
    </Layout>
  );
}

export default FutureTech;
