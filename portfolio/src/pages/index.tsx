import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (

    <div className ={ styles.homeContainer }>

    <Head>
       <title>Home | Portfólio</title> 
    </Head>

      <img src="/images/man-pc.svg" alt="#" />
    

    </div>
  )
}