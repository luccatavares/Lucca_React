import { SFooter } from "./styles"
import Insta from "../../assets/insta.png"

export function Footer() {
  return (
    <SFooter>
      <a href="http://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
    </SFooter>
  )
}