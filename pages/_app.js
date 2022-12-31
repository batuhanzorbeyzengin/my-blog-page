import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import {Montserrat} from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  return(
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
