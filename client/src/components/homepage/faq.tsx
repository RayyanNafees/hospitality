/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question:
      " What information is required for managing appointments through the system?",
    answer:
      "The system requires Patient ID, Doctor ID, Date and time of appointment, Appointment status (confirmed, pending, cancelled), Reason for appointment, Duration of appointment, and Any special requirements or notes.",
  },
  {
    id: 2,
    question: "What patient details are stored in the system? ",
    answer:
      "The system stores Patient ID, Name, Date of Birth, Gender, Contact Information (phone number, email), Address, Medical history, Insurance information, Emergency contact details, Allergies and past surgeries, Current medications.",
  },
  {
    id: 3,
    question: "What facility-related information does the system manage?",
    answer:
      "The system manages Facility ID, Facility name, Location (address, city, state, zip code), Floor plans and layouts, Equipment inventory and maintenance schedules, Utility usage and expenses.",
  },
  {
    id: 4,
    question: "What staff-related data is stored and managed in the system?",
    answer:
      "The system stores Staff ID, Name, Position/title, Department/Unit, Contact Information, Shift schedules, Qualifications and certifications, Training history, Payroll information.",
  },
  {
    id: 5,
    question: "How does the system handle inventory and supplies?",
    answer:
      "The system manages Item ID, Item name, Quantity in stock, Supplier information, Purchase orders and invoices, Expiry dates for perishable items, Usage history, Reorder levels.",
  },
  {
    id: 6,
    question: " What financial aspects are covered by the system?",
    answer:
      "The system handles Billing/Payment ID, Patient ID, Service/Procedure ID, Date of service, Cost/Price, Payment status (paid, pending, overdue), Insurance claims and reimbursements, Financial reports (income statements, balance sheets).",
  },

  // More questions...
];

export default function Example() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-xl">
          <h2
            id="faq-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Questions. Frequently asked ones. Plus our answers. That's how FAQs
            work. If you can't find what you're looking for, you can always{" "}
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              send us an email
            </a>{" "}
            with your enquiry.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={crypto.randomUUID()}>
              <dt className="text-base font-medium text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-3 text-sm text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
