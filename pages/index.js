import styles from '../styles/Home.module.css';
import Layout from "../components/Layout";
import Seo from "../styles/HeadData.json";
import { useRouter } from "next/router";
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  return (
    <Layout title={Seo.home.title} description={Seo.home.description} keywords={Seo.home.keywords} canonical={"http://localhost:3000" + router.pathname}>
      <section id={styles.section_1} className={`row ${styles.mt20}`}>
        <div className="col-sm-6">
          <h1 className={styles.entry_title-1}>Merhabalar, ben Batuhan</h1>
          <p className={styles.entry_sub_content}>
            Yazılım geliştiricisiyim, bu blog adresinde programlama ve çeşitli teknolojiler konusunda tecrübelerimi göreceksiniz.
          </p>
          <button className={styles.entry_cv_button}>
            Özgeçmişi indir 
          </button>
        </div>
        <div className="col-sm-6 d-flex justify-content-center items-center">
          <div className={styles.profile_img_container}>
            <div className={styles.profile_image_bg}></div>
            <Image src={"https://media.licdn.com/dms/image/C4D03AQEsa4VEClzzsQ/profile-displayphoto-shrink_800_800/0/1661805629598?e=1677715200&v=beta&t=q98wB3gvCqOYXlr-K5V2f87wtwomOPTipeMm8giibpY"} width={243} height={243} alt={"Profile resmi"} className={styles.entry_profile_image} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
