import { Categories, Feedbacks, Footer, Hero, Sales } from "@/components"

export default function Home() {
  return (
    <div className="app">
      <div className="app__sections">
        <Hero />
        <Categories />
        <Sales />
        <Feedbacks />
        <Footer />
      </div>
    </div>
  )
}