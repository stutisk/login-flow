import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { AuthActions } from "../../Components/AuthActions";

const COUNTRY_CODES = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
];

export const OtpVerification = ({
  onBack,
  countryCode,
  onCountryCodeChange,
  mobileNumber,
  onMobileNumberChange,
  onContinue,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected =
    COUNTRY_CODES.find((c) => c.code === countryCode) ?? COUNTRY_CODES[0];
  const displayCode = countryCode || selected.code;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-12">
          <h2 className="text-primary text-xl sm:text-2xl font-normal text-left">
            OTP Verification
          </h2>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm text-accent2 text-left font-normal">
              Mobile Number<span className="text-accent3 ">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="cursor-pointer flex items-center gap-2 border border-accent rounded-lg px-4 py-6 w-full sm:w-auto min-w-0 bg-white focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                >
                  <span className="text-base">{selected.flag}</span>
                  <span className=" text-accent2 truncate">{displayCode}</span>
                  <ChevronDown
                    size={18}
                    className={`ml-auto sm:ml-0 shrink-0  font-medium text-accent2 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <ul
                    role="listbox"
                    className="  absolute top-full left-0 mt-1 w-full min-w-[140px] max-h-48 overflow-y-auto bg-white border border-accent rounded-lg shadow-lg z-20 py-1"
                  >
                    {COUNTRY_CODES.map((item) => (
                      <li
                        key={item.code}
                        role="option"
                        aria-selected={item.code === displayCode}
                        onClick={() => {
                          onCountryCodeChange?.(item.code);
                          setDropdownOpen(false);
                        }}
                        className=" cursor-pointer flex items-center gap-2 px-3 py-2  hover:bg-blue-50 text-sm"
                      >
                        <span>{item.flag}</span>
                        <span className="font-medium">{item.code}</span>
                        <span className="text-gray-500">{item.country}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="8343989239"
                value={mobileNumber ?? ""}
                onChange={(e) =>
                  onMobileNumberChange?.(
                    e.target.value.replace(/\D/g, "").slice(0, 15)
                  )
                }
                className=" flex-1  text-accent2 min-w-0 w-full border border-accent rounded-lg px-10 py-6 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <AuthActions
        onBack={onBack}
        onContinue={onContinue}
        isContinueDisabled={mobileNumber?.length !== 10}
      />
    </div>
  );
};
