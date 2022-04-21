import GlobalStyle from  "../styles/GlobalStyle";
import App,{AppContext,AppProps,AppInitialProps} from "next/app"
import Header from "../components/Header";

const app = ({Component,pageProps}:any) =>{
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Component {...pageProps}/>
    
        </>
    )
}

export default app