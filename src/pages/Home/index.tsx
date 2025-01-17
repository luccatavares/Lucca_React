import { Section } from './styles'
import img1 from "../../assets/brinquedo1.png"
import img2 from "../../assets/brinquedo2.png"


export function Home() {
  return (
    <Section>
      <img src={img1} alt="IMG na esquerda" />
      <img src={img2} alt="IMG na direita" />
    </Section>
  )
}
