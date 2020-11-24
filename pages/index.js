import Head from 'next/head'
import { HelpMeDecide } from '../components/helpMeDecide/HelpMeDecide'
import { ProductMessage } from '../components/ProductMessage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <ProductMessage></ProductMessage>
      <HelpMeDecide></HelpMeDecide>
    </div>
  )
}
