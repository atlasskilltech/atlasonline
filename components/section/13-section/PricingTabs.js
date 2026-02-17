export default function PricingTabs({ activeTab, setActiveTab }) {
    const tabs = [
      { key: "lumpsum", label: "Total Lumpsum" },
      { key: "semester", label: "Semester-wise" },
      { key: "annual", label: "Annual" },
    ];
  
    return (
      <div className="
        flex
        gap-3
        mb-6
        overflow-x-auto
        whitespace-nowrap
      ">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              flex-shrink-0
              ${
                activeTab === tab.key
                  ? "bg-teal-500 text-white"
                  : "border border-gray-300 text-gray-700"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
  