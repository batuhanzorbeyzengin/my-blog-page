import Image from "next/image";

export default function Footer() {
    return(
        <div className="col-12 d-flex justify-content-center">
            <ul className="d-flex">
                <li>
                    <Image src={"/images/twitter.svg"} width={36} height={30} alt="twitter icon" />
                </li>
                <li>
                    <Image src={"/images/instagram.svg"} width={36} height={30} alt="twitter icon" />
                </li>
            </ul>
        </div>
    )
}