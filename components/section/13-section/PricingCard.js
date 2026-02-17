export default function PricingCard({ activeTab }) {
    return (
      <div className="overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-indigo-800 to-teal-500 text-white p-4">
  
          {activeTab === "lumpsum" && (
            <>
              <PriceRow label="MBA Fees" value="₹ 20,00,000" />
              <PriceRow label="For certifications" value="₹ 1,08,500" />
              <Divider />
              <Total total="₹21,08,500" />
            </>
          )}
  
          {activeTab === "semester" && (
            <>
              <PriceRow label="Per Semester" value="₹ 2,60,000" />
              <PriceRow label="Total Semesters" value="8" />
              <Divider />
              <Total total="₹20,80,000" />
            </>
          )}
  
          {activeTab === "annual" && (
            <>
              <PriceRow label="Per Year" value="₹ 5,20,000" />
              <PriceRow label="Duration" value="4 Years" />
              <Divider />
              <Total total="₹20,80,000" />
            </>
          )}
  
        </div>
      </div>
    );
  }
  
  function PriceRow({ label, value }) {
    return (
      <div className="flex justify-between text-sm mb-2">
        <span>{label}</span>
        <span>{value}</span>
      </div>
    );
  }
  
  function Divider() {
    return <hr className="border-white/40 mb-3" />;
  }
  
  function Total({ total }) {
    return (
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold">Total</span>
        <span className="text-2xl font-bold">{total}</span>
      </div>
    );
  }
  