import Head from "next/head";
import Layout from "../../components/layuot"
import MenuProgramming from "../../components/programming/menuProgaming";
import ProgrammingContent from "../../components/programming/programming-content";

const Programming = () => {
    return(
        <Layout>
            <Head>
                <title>Lập trình</title>
            </Head>
            <MenuProgramming/>
            <ProgrammingContent/>
        </Layout> 
    );
}

export default Programming;