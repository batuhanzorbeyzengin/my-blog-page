import Link from "next/link"

export default function Header() {
    return (
        <div className="col-12">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Batuhan Zorbey Zengin</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href={"/isler"} legacyBehavior>
                                    <a className="nav-link active" aria-current="page">
                                        İşler
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/blog"} legacyBehavior>
                                    <a className="nav-link">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/iletisim"} legacyBehavior>
                                    <a className="nav-link" aria-disabled="true">
                                        İletişim
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}