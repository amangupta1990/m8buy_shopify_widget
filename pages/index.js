import Head from 'next/head'
import { ProductMessage } from '../components/ProductMessage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <ProductMessage></ProductMessage>
    </div>
  )
}
