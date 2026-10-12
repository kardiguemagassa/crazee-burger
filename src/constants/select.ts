import { Color, ColorKeys, theme } from "@/theme/theme"
import { ICON_NAMES, IconName } from "@/types/Category"

export const isAvailableOptions = [
  { optionValue: "true", label: "En stock" },
  { optionValue: "false", label: "En rupture" },
]

export const isPublicisedOptions = [
  { optionValue: "false", label: "Sans pub" },
  { optionValue: "true", label: "Avec pub" },
]

type CategoryColors = "orange" | "bleu" | "rose" | "vert" | "jaune" | "rouge"

type SelectLabel = "optionValue" | "label"

type CategoryIconsOptionsKey = SelectLabel

type ColorOptions = Record<SelectLabel, Color[ColorKeys] | CategoryColors>[]
type CategoryIconsOptions = Record<CategoryIconsOptionsKey, IconName>[]
export type CategoryOptions = ColorOptions | CategoryIconsOptions

export const colorsOptions: ColorOptions = [
  { optionValue: theme.colors.primary, label: "orange" },
  { optionValue: theme.colors.blue, label: "bleu" },
  { optionValue: theme.colors.rose, label: "rose" },
  { optionValue: theme.colors.success, label: "vert" },
  { optionValue: theme.colors.yellow, label: "jaune" },
  { optionValue: theme.colors.red, label: "rouge" },
]

export const categoryIconsOptions: CategoryIconsOptions = ICON_NAMES.map((iconName) => ({
  optionValue: iconName,
  label: iconName,
}))

/**
 * Pour categoryIconsOptions, on peut soit ré-écrire à la main les optionsValue et les labels
 * ... ou on peut décider de tout reporter par flemme automatiquement grace à Typescript.
 * Regarde ci-dessus.
 * Mais déjà, commence sans les types, et tu vas voir que tu vas faire bcp de va et vient entre les fichiers theme, selectOptions, CategoryForm,
 * Et naturellement typescript va te venir en tête. C'est la frustration qui motive à utiliser Typescript ici car t'as la flemme de tout updater à la main.
 * Une fois typescript isntallé, t'as juste à updater à un endroit.
 */
