
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { Metadata } from "next";

 export const metadata: Metadata = {
  title: "Study Abroad Counselor& Test Prep Institute - Taksheela",

};
const RefundPolicy = () => {
  return (
     <ContainerWrapper>
       <BreadcrumbSchema />
          <h1 className="text-4xl font-semibold mt-8 mb-6 tracking-wide">Return Policy</h1>

          <p className="text-base text-gray-700 mb-4">
            Thank you for choosing Taksheela Institute of Education for your educational needs. We strive to provide the highest quality services to our customers. If you are not entirely satisfied with your purchase, we&apos;re here to help.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Cancellation and Refund Policy</h3>
          <ul className="list-disc space-y-3 ml-6">
            <li className="text-base text-gray-800">
              Customers can cancel their subscription within 7 days of the initial purchase for a full refund.
            </li>
            <li className="text-base text-gray-800">
              No refund will be provided for cancellations made after the 7 days period.
            </li>
            <li className="text-base text-gray-800">
              To cancel a subscription, customers must contact our support team by <strong>email</strong> - <a href="mailto:info@taksheela.com" target="_blank" rel="noreferrer" className="text-blue-600">info@taksheela.com</a> <strong>/ phone number -</strong> <a href="tel:+919831241212" target="_blank" rel="noreferrer" className="text-blue-600">+919831241212</a> with their account details and reason for cancellation.
            </li>
            <li className="text-base text-gray-800">
              Refunds will be processed within 3-4 business days from the date of cancellation confirmation.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Service Quality Guarantee</h3>
          <ul className="list-disc space-y-3 ml-6">
            <li className="text-base text-gray-800">
              If customers are dissatisfied with the quality of our services, they can request a refund within 7 days of the service delivery.
            </li>
            <li className="text-base text-gray-800">
              To request a refund, customers must provide details of their concerns and reasons for dissatisfaction to our support team at <strong>contact email -</strong> <a href="mailto:info@taksheela.com" target="_blank" rel="noreferrer" className="text-blue-600">info@taksheela.com</a> <strong>/ phone number -</strong> <a href="tel:+919831241212" target="_blank" rel="noreferrer" className="text-blue-600">+919831241212</a>.
            </li>
            <li className="text-base text-gray-800">
              Refunds will be issued based on the nature of the concern and at the discretion of our management team.
            </li>
            <li className="text-base text-gray-800">
              Refunds for services already delivered will be prorated based on the remaining subscription period.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Non-Refundable Services</h3>
          <ul className="list-disc space-y-3 ml-6">
            <li className="text-base text-gray-800">
              Certain services, such as personalised coaching sessions or customised course materials, may not be eligible for refunds due to their nature.
            </li>
            <li className="text-base text-gray-800">
              Customers will be notified in advance if any service is non-refundable, and such information will be clearly communicated during the purchase process.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Contact Information</h2>
          <p className="text-base text-gray-700 mb-4">
            For any questions or concerns regarding our return policy or to request a refund, please contact our support team at <strong>contact email -</strong> <a href="mailto:info@taksheela.com" target="_blank" rel="noreferrer" className="text-blue-600">info@taksheela.com</a> <strong>/ phone number -</strong> <a href="tel:+919831241212" target="_blank" rel="noreferrer" className="text-blue-600">+919831241212</a>. We are here to assist you and ensure your satisfaction with our services.
          </p>
        </ContainerWrapper>
  );
};

export default RefundPolicy;