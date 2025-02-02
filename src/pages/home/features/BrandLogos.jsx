import Marquee from "react-fast-marquee";
import b1 from "../../../assets/brand-logos/Maestro.png"
import b2 from "../../../assets/brand-logos/Klarna.png"
import b3 from "../../../assets/brand-logos/ShopPay.png"
import b4 from "../../../assets/brand-logos/AmericanExpress.png"

const BrandLogos = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-24 ">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
        <img src={b1} alt="Mastercard" className="h-24 mx-4" />
        <img src={b2} alt="Klarna" className="h-24 mx-4" />
        <img src={b3} alt="Shop Pay" className="h-24 mx-14" />
        <img src={b4} alt="American Express" className="h-24 mr-4 lg:mr-0 lg:ml-4" />
      </Marquee>
    </section>
  )
}

export default BrandLogos