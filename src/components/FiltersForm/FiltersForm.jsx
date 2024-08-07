import clsx from "clsx";
import { Checkbox, LoadButton, LocationInput } from "../UI";
import icons from "../../assets/icons.svg";
import css from "./FiltersForm.module.css";
import { useState } from "react";

const vehicleEquipments = [
  {
    name: "ac",
    text: "AC",
    iconStyles: { stroke: "initial", fill: "initial" },
  },
  {
    name: "automatic",
    text: "Automatic",
    iconStyles: { stroke: "#101828", fill: "transparent" },
  },
  {
    name: "kitchen",
    text: "Kitchen",
    iconStyles: { stroke: "#101828", fill: "transparent" },
  },
  {
    name: "tv",
    text: "TV",
    iconStyles: { stroke: "#101828", fill: "transparent" },
  },
  {
    name: "shower",
    text: "Shower/WC",
    iconStyles: { stroke: "#101828", fill: "transparent" },
  },
];

const vehicleTypes = [
  { name: "van", text: "Van" },
  { name: "fullyIntegrated", text: "Fully Integrated" },
  { name: "alcove", text: "Alcove" },
];

const Filters = () => {
  const [selected, setSelected] = useState(null);
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelected((prev) => (prev === value ? null : value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    });

    console.log("Form Data:", data);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Location</legend>
        <LocationInput name="location" placeholder="City" />
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={clsx(css.legend, css.legendFilters)}>Filters</legend>
        <fieldset className={css.fieldsetRadio}>
          <legend className={css.legendRadio}>Vehicle equipment</legend>
          <ul className={css.equipmentsList}>
            {vehicleEquipments.map(({ name, text, iconStyles }) => (
              <li className={css.equipmentsItem} key={name}>
                <Checkbox
                  name={name}
                  type="checkbox"
                  width={32}
                  height={32}
                  iconPath={`${icons}#icon-${name}`}
                  iconStyles={iconStyles}
                >
                  {text}
                </Checkbox>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset className={css.fieldsetRadio}>
          <legend className={css.legendRadio}>Vehicle type</legend>
          <ul className={css.typesList}>
            {vehicleTypes.map(({ name, text }) => (
              <li className={css.typesItem} key={name}>
                <Checkbox
                  name="vehicleTypes"
                  type="checkbox"
                  width={40}
                  height={28}
                  value={name}
                  iconPath={`${icons}#icon-${name}`}
                  checked={selected === name}
                  onChange={handleCheckboxChange}
                >
                  {text}
                </Checkbox>
              </li>
            ))}
          </ul>
        </fieldset>
      </fieldset>
      <LoadButton type="submit">Search</LoadButton>
    </form>
  );
};

export default Filters;
