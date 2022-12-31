import styles from '../HomeBlogSection/index.module.css';
import Image from 'next/image';

const data = [
    {
        img: "https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEyM3x8cGF0dGVybnxlbnwwfHx8fDE2NzAxNTIwMTg&ixlib=rb-4.0.3&q=80&w=1200",
        title: "Blog 1",
        date: 2020,
        category: "Dashboard",
        previewContent: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."
    },
    {
        img: "https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEyM3x8cGF0dGVybnxlbnwwfHx8fDE2NzAxNTIwMTg&ixlib=rb-4.0.3&q=80&w=1200",
        title: "Blog 1",
        date: 2020,
        category: "Dashboard",
        previewContent: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."
    },
    {
        img: "https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEyM3x8cGF0dGVybnxlbnwwfHx8fDE2NzAxNTIwMTg&ixlib=rb-4.0.3&q=80&w=1200",
        title: "Blog 1",
        date: 2020,
        category: "Dashboard",
        previewContent: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."
    }
]


export default function HomeBlogSection() {
    return (
        <section id={styles.blog_list} className='row'>
            <h2 className={styles.blog_title}>Son Yayınlanan Bloglar</h2>
            {data.map((x) => (
                <div key={x.title} className={styles.blog_card}>
                    <Image className={styles.blog_img} src={x.img} width={246} height={180} alt={"blog 1"} />
                    <div>
                        <h3 className={styles.blog_preview_title}>{x.title}</h3>
                        <div className={styles.blog_date_category}>
                            <div>
                                {x.date}
                            </div>
                            <div>
                                {x.category}
                            </div>
                        </div>
                        <p>
                            {x.previewContent}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}