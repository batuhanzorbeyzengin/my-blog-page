import Layout from "../components/Layout";
import Seo from "../styles/HeadData.json";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout title={Seo.title} description={Seo.description} keywords={Seo.keywords} canonical={"http://localhost:3000" + router.pathname}>
      <div className="col-12">
        Anasayfa
      </div>
    </Layout>
  )
}
