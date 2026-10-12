import styled from "styled-components"
import { theme } from "@/theme/theme"
import { ComponentProps, useEffect, useState } from "react"

// type OptionValue = string | number | readonly string[]

type Option = {
  optionValue: string | number | readonly string[],
  label: string
}

type SelectInputProps = {
  options: Option[],
  Icon?: JSX.Element,
  selectPlaceholder?: string
} & ComponentProps<"select">

export default function SelectInput({
  options,
  value,
  Icon,
  className,
  onChange,
  selectPlaceholder,
  ...restProps
}: SelectInputProps) {
  const [selectedValue, setSelectedValue] = useState<Option["optionValue"]>(value ?? ""); // Valeur vide par défaut


  // 🔥 Ajout d'un useEffect pour synchroniser selectedValue avec value externe
  useEffect(() => {
    setSelectedValue(value ?? "");
  }, [value]);

  const handleChangeInternal = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
    onChange && onChange(event)
  }

  return (
    <SelectInputStyled className={className} selectedValue={selectedValue}>
      {Icon && <div className="icon">{Icon}</div>}
      <select value={selectedValue} onChange={handleChangeInternal} {...restProps}>
        <option value="" disabled hidden>
          {selectPlaceholder}
        </option>
        {options.map(({ optionValue, label }) => (
          <option key={label} value={optionValue} >
            {label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  )
}


type SelectInputStyledProps = {
  selectedValue: Option["optionValue"] // attention, selectedValue n'attend pas l'objet option, il attend la propriété DANS Option qui s'appelle "value"  et qui peut être de type OptionValue ou Option["optionValue"], ces deux éctitures sont équivalentes
}

// donc en gros, pour typer selectedValue, t'as 2 possibilités : 
// - soit t'as créé un type OptionValue = string | number | readonly string[] et tu types avec OptionValue
// - soit tu accèdes aux "type indexé" avec Option["optionValue"]. Comme ça t'accèdes au type de la propriété dont la clé se nomme "optionValue". Ici, pour l'exercice, j'ai retenu le type indexé.

const SelectInputStyled = styled.div<SelectInputStyledProps>`
  /* border: 1px solid yellow; */
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    /* border: 1px solid red; */
    font-size: ${theme.fonts.size.P1};
    margin: 0 13px 0 8px;
    color: ${theme.colors.greyBlue};
    display: flex; // centre verticalement l'icône dans le champ select
  }

  select {
    /* border: 1px solid blue; */
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${({ selectedValue }) => selectedValue !== "" ? theme.colors.dark : theme.colors.greyMedium};
    width: 100%;
    outline: 0;
  }
` // commente/décommente une ligne CSS pour connaître son effet sur le composant

// Attention à deux props "value":
// 1️⃣ value dans <select/> (valeur selectionnée) ==> onChange est lié à cette value
// 2️⃣ value dans <option/> (valeur disponible)
// const options = [
//   { optionValue: "", label: "", selected: true },
//   { optionValue: "", label: "", selected: false },
// ]
