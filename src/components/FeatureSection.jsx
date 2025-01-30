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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Smart Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {feature.description.map((point, idx) => (
                  <li key={idx} className="text-lg">
                    {point}
                  </li>
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
