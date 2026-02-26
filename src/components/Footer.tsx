// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "./ContainerWrapper";

const Footer = () => {

  
  return (
    <footer className="bg-white pb-10  text-md text-[#606060]">
      <ContainerWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-[#606060] border-b-2 py-8">
          {/* Column 1 - Logo & Offices */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link
                href={'/'}
                target="_self"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/images/TIE_LOGO.png"}
                  alt="TIE Logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
            <div className="space-y-2">
              <p>
                <strong>Dubai office:</strong> Sharjah Media City, Sharjah -
                United Arab Emirates
              </p>
              <p>
                <strong>Delhi office:</strong> Hub Hive 11, 1st Floor, 262, Plot
                1, ITDC Western Marg, Near Saket Metro, New Delhi 110017
              </p>
              <p>
                <strong>Mumbai office:</strong> 613, OPAL Square, Wagle Estate,
                Thane 40060
              </p>
              <p>
                <strong>Banglore office:</strong> C8, Kudremukh Colony,
                Koramangala 2nd Block, Sarjapura road. Near water tank,
                Bangalore: 560034
              </p>
              <p>
                <strong>Kolkata Office:</strong> 79/16 Palm Avenue, Ballygunje
                Phari, Kolkata – 700019.
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:info@taksheela.com"
                  className="text-blue-700 underline"
                >
                  info@taksheela.com
                </Link>
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.facebook.com/taksheelainstituteofeducation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/images/fb.svg"}
                  alt="Facebook"
                  width={35}
                  height={35}
                />
              </Link>
              <Link
                href="https://www.instagram.com/taksheela_studyabroad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/images/insta.svg"}
                  alt="Instagram"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="font-bold mb-3 text-black">SERVICES</h3>
            <ul className="space-y-2 ">
              <li><Link href={'/study-abroad'}>Study Abroad</Link></li>
              <li><Link href={'/test'}>Test Prep</Link></li>
              <li><Link href={'/international-relation'}>International Engagement</Link></li>
              <li><Link href={'/immersion'}>Immersion</Link></li>
            </ul>
          </div>

          {/* Column 3 - Menu */}
          <div>
            <h3 className="font-bold mb-3 text-black">MENU</h3>
            <ul className=" space-y-2 ">
              <li className="py-1">
                <Link href={"/"}>Home </Link>
              </li>

              <li>
                <Link href={"/aboutus"}>Our Story</Link>
              </li>

              <li>
                <Link href="/study-abroad-consultants-delhi-ncr">
                  Delhi NCR
                </Link>
              </li>

              <li>
                <Link href="/consultants-study-abroad-kolkata">
                  Kolkata
                </Link>
              </li>

               <li>
                <Link href="/study-abroad-consultants-bangalore">
                  Bangalore
                </Link>
              </li>

               <li>
                <Link href="/study-abroad-consultants-bhubaneswar">
                  Bhubaneswar
                </Link>
              </li>

               <li>
                <Link href="/study-abroad-consultants-mumbai">
                  Mumbai
                </Link>
              </li>

              
              <li>
                <Link
                  href="/images/Taksheela-Brochure.pdf"
                  download="Taksheela Brochure.pdf"
                  className="hover:underline text-[#606060]"
                >
                  Download Brochure
                </Link>
              </li>

              <li>
                <Link href={`/contact`}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Others */}
          <div>
            <h3 className="font-bold mb-3 text-black">Others</h3>
            <ul className=" space-y-2 ">
              <Link href={"/privacy-policy"}>
                <li className="py-1">Privacy Policy</li>{" "}
              </Link>

              <Link href={"/refund-policy"}>
                <li className="py-1">Refund Policy</li>{" "}
              </Link>
              <Link href={"/terms-and-conditions"}>
                <li className="py-1">Terms and Conditions</li>{" "}
              </Link>
            </ul>
          </div>
        </div> 
      {/* Copyright */}
      <div className="text-center pt-6 text-sm text-[#606060] border-t border-gray-300">
        Copyright ©️ 2025 Taksheela Institute of Education. All rights reserved.
      </div>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
