import React from 'react';

const IndustryFacilitiesAndPreview = () => {
  return (
    <div className="bg-white text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h1 className="text-4xl font-extrabold text-center text-[#6556cd] mb-12 tracking-tight">
          Industry Facilities & Preview
        </h1>

        {/* Flex Container for Side by Side Layout */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Industry Facilities Section */}
          <div className="flex-1 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-[#6556cd] mb-4 hover:text-[#5544c2] transition-all duration-300">
                Retail
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Are you looking to streamline your retail operations, enhance customer experiences, and boost your profits? Our cutting-edge Retail Management Software is here to empower your business.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6556cd] mb-4 hover:text-[#5544c2] transition-all duration-300">
                Apparel
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our software is designed to streamline every aspect of your apparel business, from inventory management to sales and customer engagement.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6556cd] mb-4 hover:text-[#5544c2] transition-all duration-300">
                Groceries Department Stores
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our Grocery Department Store Sorting Solution is a comprehensive software package designed to streamline and optimize the sorting and organization processes within your store.
              </p>
            </section>
            {/* Add more sections as needed */}
          </div>
          
          {/* Preview Section */}
          <div className="flex-1 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-[#6556cd] mb-4 hover:text-[#5544c2] transition-all duration-300">
                Whole Sale Billing Front End
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our wholesale billing page simplifies the complex task of invoicing and payment for bulk orders.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6556cd] mb-4 hover:text-[#5544c2] transition-all duration-300">
                Inventory Entries Front End
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The Inventory Entries page is a centralized platform that enables users to efficiently record and manage all incoming and outgoing inventory transactions.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6556cd] mb-4 hover:text-[#5544c2] transition-all duration-300">
                Item List with Purchase Detail Front End
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our Item List with Purchase Detail page provides a comprehensive overview of your inventory, allowing you to easily manage and track all your products.
              </p>
            </section>
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryFacilitiesAndPreview;
