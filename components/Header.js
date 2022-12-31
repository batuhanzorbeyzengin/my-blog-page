import Link from "next/link"

export default function Header() {
    return (
        <div className="col-12">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link href="/isler" legacyBehavior>
                        <a className="nav-link active" aria-current="page">
                            İşler
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog" legacyBehavior>
                        <a className="nav-link">
                            Blog
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/iletisim" legacyBehavior>
                        <a className="nav-link">
                            İletişim
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}