import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactForm from "@/components/ContactForm";
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Get in Touch with Taksheela Institute | We're Here to Help",
  description:
    "Contact Taksheela Institute for expert support and guidance. We're here to help with all your education, career queries, and ensure your success every step.",
  keywords: [
    "Contact Taksheela Institute",
    "Study Abroad Help",
    "Education Support",
    "Global Education Guidance",
    "Career Queries",
    "Taksheela Contact Info",
  ],
  openGraph: {
    title: "Get in Touch with Taksheela Institute | We're Here to Help",
    description:
      "Contact Taksheela Institute for expert support and guidance. We're here to help with all your education, career queries, and ensure your success every step.",
    url: "https://www.taksheela.com/contact",
    siteName: "Taksheela Institute",
    images: [
      {
        url: "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
        width: 1200,
        height: 630,
        alt: "Taksheela Institute Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch with Taksheela Institute | We're Here to Help",
    description:
      "Contact Taksheela Institute for expert support and guidance. We're here to help with all your education, career queries, and ensure your success every step.",
    images: [
      "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
    ],
    site: "@TIE_Taksheela",
    creator: "@TIE_Taksheela",
  },
};

const ContactUs = () => {
  return (
    <ContainerWrapper className="py-12">
       <BreadcrumbSchema />
      {/* ✅ Semantic Headings for SEO */}
      <h1 className="sr-only">Contact Us Today</h1>
      <h2 className="sr-only">Get in Touch with Us</h2>
      <h2 className="sr-only">Our Location</h2>
      <h3 className="sr-only">Phone and Email</h3>
      <h3 className="sr-only">Office Address</h3>
      <h3 className="sr-only">Send Us a Message</h3>
      <h4 className="sr-only">Quick Response Guarantee</h4>

      {/* Title */}
      <div className="text-center ">
        <HeadingTypography content="Contact Us" textAlign="center" />
        <p className="text-gray-500 mt-3 text-md sm:text-base max-w-2xl mx-auto">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="bg-white shadow-xl rounded-lg mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10 relative">
        {/* Left Panel */}
        <div className="bg-[#00999e] text-white rounded-md relative overflow-hidden p-6 md:col-span-1 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Contact Information
            </h2>

            <div className="flex items-start space-x-4 my-4">
              <FiPhone className="text-lg mt-1" />
              <a href="tel:+919831241212" className="text-md hover:underline">
                +91 9831241212
              </a>
            </div>

            <div className="flex items-start space-x-4 my-4">
              <FiMail className="text-lg mt-1" />
              <a
                href="mailto:info@taksheela.com"
                className="text-md hover:underline"
              >
                info@taksheela.com
              </a>
            </div>
          </div>

       {/* Social Icons */}
<div className="flex space-x-3 mt-6">
  <Link
    href="https://www.facebook.com/taksheelainstituteofeducation/"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer p-2 border border-white rounded-full hover:bg-white hover:text-[#00999e] transition"
  >
    <FaFacebookF className="text-xl" />
  </Link>
  <Link
    href="https://www.instagram.com/taksheela_studyabroad/"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer p-2 border border-white rounded-full hover:bg-white hover:text-[#00999e] transition"
  >
    <FaInstagram className="text-xl" />
  </Link>
  <Link
    href="https://www.linkedin.com/company/taksheela-institute-of-education/"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer p-2 border border-white rounded-full hover:bg-white hover:text-[#00999e] transition"
  >
    <FaLinkedinIn className="text-xl" />
  </Link>
  <Link
    href="https://www.youtube.com/place/g_11bwhbdj5v/shorts"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer p-2 border border-white rounded-full hover:bg-white hover:text-[#00999e] transition"
  >
    <FaYoutube className="text-xl" />
  </Link>
</div>


          {/* Background image */}
          <Image
            src={"/images/contactBg.svg"}
            alt="Contact background"
            fill
            className="absolute bottom-0 right-0 w-32 md:w-40 opacity-30 pointer-events-none"
          />
        </div>

        {/* Right Panel - Contact Form */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
      {/* Map Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
       
        <div>
          <HeadingTypography color="#00999e" content="Head Office" />
          <div className="mt-6 mb-4">
            <iframe
              title="Head Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.464703215515!2d88.3672814!3d22.5330314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276db766a48df%3A0xf49d4b95cbe8bcec!2sTaksheela%20Institute%20of%20Education!5e0!3m2!1sen!2sin!4v1697453294193!5m2!1sen!2sin"
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

    
        <div>
          <HeadingTypography color="#00999e" content="Branch Office" />
          <div className="mt-6 mb-4">
            <iframe
              title="Branch Office Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.967744570511!2d77.1981384!3d28.517411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1172bab4731%3A0x33bd9636218081fa!2sHub%20Hive%2011%20Coworking%20Space%20Saket!5e0!3m2!1sen!2sin!4v1711447102515!5m2!1sen!2sin"
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div> */}

      {/* Office Addresses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
        {[
          {
            title: "Dubai Office",
            address: "Sharjah Media City, Sharjah - United Arab Emirates",
          },
          {
            title: "Delhi Office",
            address:
              "Hub Hive 11, 1st Floor, 262, Plot 1, ITDC Western Marg, Near Saket Metro, New Delhi 110017",
          },
          {
            title: "Mumbai Office",
            address: "613, OPAL Square, Wagle Estate, Thane 400604",
          },
          {
            title: "Bangalore Office",
            address:
              "C8, Kudremukh Colony, Koramangala 2nd Block, Sarjapura Road, Near Water Tank, Bangalore: 560034",
          },
          {
            title: "Bhubaneswar Office",
            address:
              "Chandaka Industrial Estate, Patia Road, Bhubaneswar, Odisha, India, 751024",
          },
          {
            title: "Kolkata Office",
            address: "79/16 Palm Avenue, Ballygunje Phari, Kolkata – 700019",
          },
        ].map((office, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-[#00999e] mb-2">
              {office.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {office.address}
            </p>
          </div>
        ))}
      </div>
    </ContainerWrapper>
  );
};

export default ContactUs;
