import React from "react";

const features = [
  {
    title: "Attractive Billing Attributes",
    description: [
      "Get Started quickly.",
      "Create Invoice Estimates / Performa Invoices.",
      "Customize the way your bill prints.",
      "Fix entry mistakes by deleting, editing, or shifting bill numbers.",
    ],
    icon: "💡",
  },
  {
    title: "Barcode Printing",
    description: [
      "Print your own barcode stickers.",
      "Design your own sticker layouts.",
      "Personalize your stickers with your logo and design.",
      "Support for dedicated sticker printers.",
    ],
    icon: "🏷️",
  },
  {
    title: "Purchase Order",
    description: [
      "Purchase & Sales Order management.",
      "Reorder system based on sales and stock-sales orders.",
      "Provision to split orders into parts.",
      "Auto purchase ordering based on the best supplier.",
    ],
    icon: "🛒",
  },
  {
    title: "Financial Accounting",
    description: [
      "Ledgers / Cash / Bank Books (with last year data).",
      "Day Book / Journal / Receipt / Payment.",
      "Sales / Purchases Register.",
      "Duties and Taxes management.",
    ],
    icon: "💰",
  },
  {
    title: "Stock Distribution Management",
    description: [
      "Support for multiple godowns.",
      "Transfer stock between godowns.",
      "Easily create PO and Receive Item Entry.",
      "Manage damaged or dump stock.",
    ],
    icon: "📦",
  },
  {
    title: "MIS Report Summary",
    description: [
      "1000+ Reports for Gross Profit Analysis.",
      "Operator-wise worksheet.",
      "Account Groups & Ledgers Comparison.",
    ],
    icon: "📊",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-teal-700 to-purple-800">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 text-center mb-12 tracking-tight shadow-lg drop-shadow-md hover:text-teal-500 transition-all duration-300">
          Smart Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1e1d22] p-8 rounded-lg shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-6 text-teal-400 transform hover:rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <ul className="text-gray-300 space-y-3">
                {feature.description.map((point, idx) => (
                  <li key={idx} className="text-lg">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
