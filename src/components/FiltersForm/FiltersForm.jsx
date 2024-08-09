import { useState } from "react";
import clsx from "clsx";
import { Checkbox, LoadButton, LocationInput } from "../UI";
import {
  vehicleEquipments,
  vehicleTypes as vehicleTypesList,
} from "../../constants.js";
import icons from "../../assets/icons.svg";
import css from "./FiltersForm.module.css";
import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(searchParams.get("vehicleTypes"));
  const [filters, setFilters] = useState({
    ac: !!searchParams.get("ac"),
    automatic: !!searchParams.get("automatic"),
    kitchen: !!searchParams.get("kitchen"),
    tv: !!searchParams.get("tv"),
    shower: !!searchParams.get("shower"),
  });

  const onChangeFilters = (name) => {
    setFilters((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelected((prev) => (prev === value ? null : value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      if (value.trim()) data[key] = value;
    });
    setSearchParams(data);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Location</legend>
        <LocationInput
          defaultValue={searchParams.get("location") || ""}
          name="location"
          placeholder="City"
        />
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
                  checked={filters[name]}
                  onChange={() => onChangeFilters(name)}
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
            {vehicleTypesList.map(({ name, text }) => (
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
