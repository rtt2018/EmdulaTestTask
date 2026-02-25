import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import Select, { components as NativeComponents } from "react-select";
import { useState } from "react";

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "14px",
    height: "14px",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    padding: "0",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "14px",
    padding: "0",
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    height: "14px",
    fontFamily: `"Inter", sans-serif`,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.28571,
    textAlign: "center",
    color: "#f4f1eb",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: `"Inter", sans-serif`,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.28571,
    textAlign: "center",
    color: "#f4f1eb",
    margin: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "14px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1a1a1a",
    border: "1px solid #ccc",
    borderRadius: "0.375rem",
    marginTop: 4,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: `"Inter", sans-serif`,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.28571,
    color: "#f4f1eb",
    backgroundColor: state.isFocused ? "#2d2d2d" : "transparent",
    cursor: "pointer",
    padding: "4px 8px",
  }),
};

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <NativeComponents.DropdownIndicator {...props}>
      <svg
        width="14"
        height="14"
        className={`transition-transform duration-200 ml-1 ${
          menuIsOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <use href="/icon-sprite.svg#arrow-select" />
      </svg>
    </NativeComponents.DropdownIndicator>
  );
};

export default function TimeZoneComponent() {
  const labelStyle = "original";
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    allTimezones,
  });
  const [selectedTimezone, setSelectedTimezone] = useState(() => ({
    value: parseTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
      .value,
    label: parseTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
      .label,
    showLabel: parseTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
      .altName,
  }));

  const selectOptions = options.map((opt) => ({
    value: opt.value,
    label: opt.label,
    showLabel: opt.altName,
  }));

  return (
    <div className="">
      <p className="font-primary font-semibold text-base leading-6 text-[#f4f1eb] mb-1.5">
        Time zone
      </p>
      <div className="flex gap-3">
        <svg width="14" height="14">
          <use href="/icon-sprite.svg#earth-TimeZone"></use>
        </svg>
        <Select
          value={{
            value: selectedTimezone.value,
            label: `${selectedTimezone.showLabel} (${new Date().toLocaleTimeString(
              "en-US",
              {
                timeZone: selectedTimezone.value,
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              },
            )})`,
            showLabel: selectedTimezone.label,
          }}
          options={selectOptions}
          onChange={(opt) => setSelectedTimezone(opt)}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator,
          }}
          styles={customStyles}
        />
      </div>
    </div>
  );
}
