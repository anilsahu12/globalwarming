import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainSection from "../components/MainSection.jsx";
import ContentSection from "../components/ContentSection.jsx";
import QuoteContainer from "../components/QuoteContainer.jsx";
import Navbar from "../components/Navbar.jsx";
import StatCard from "../components/StatCard.jsx";
import VideoComponent from "../components/VideoComponent.jsx";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoComponent />
      <StatCard/>
      <MainSection />
      <ContentSection />
      <p>Another section</p>
      <br />
      <br />
      <br />
      <br />
      <QuoteContainer />
    </>
  )
}
