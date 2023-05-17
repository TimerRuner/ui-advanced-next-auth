import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from "../store";
import {useRouter} from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

const publicRoutes = ["/signup"]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return publicRoutes.includes(router.pathname) ? (
     <Component {...pageProps} />
  ) : (
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
  )
}

export default wrapper.withRedux(MyApp)
