export default function LearnFeatures() {
    const features = [
      "User-friendly interface",
      "Live and recorded lectures",
      "Instant notifications and updates",
      "AI-powered learning insights",
    ];
  
    return (
      <ul className="space-y-4 small:space-y-5 text-white text-sm">
  
        {features.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3"
          >
  
            <span className="mt-1 text-cyan-300">
              ✓
            </span>
  
            <span>{item}</span>
  
          </li>
        ))}
  
      </ul>
    );
  }
  