import { useState } from "react"
import { deepClone } from "@/utils/array"
//@ts-ignore
import { updateProducts } from "../api/product"
import { fakeCategories } from "@/fakeData/fakeCategories"
import { CATEGORY_ALL } from "@/constants/categories"
import { CATEGORY_MENUS } from "@/constants/menu"
import { updateCategoriesInDB } from "@/api/categories"
import { Category } from "@/types/Category"

// ensemble des catégories disponibles pour tous les produits du catalog
export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>(fakeCategories.LARGE) // sert à filtrer et afficher les produits par catégorie
  const [categoryAll, setCategoryAll] = useState<Category>(CATEGORY_ALL) // c'est le bouton "Tous" qui s'affiche en haut à gauche du catalog produits
  const [categoryMenus, setCategoryMenus] = useState<Category>(CATEGORY_MENUS) // sert à filtrer et afficher uniquement la catégorie "menus" (l'onglet violet)

  // comportements (gestionnaire de state ou "state handlers")
  const handleAddCategory = (categoryToAdd: Category, username: string) => {
    if (!categories) return
    // 1. copie du tableau
    const categoriesCopy = deepClone(categories)

    // 2. manip de la copie du tableau
    const categoriesUpdated = [categoryToAdd, ...categoriesCopy]

    // 3. update du state
    setCategories(categoriesUpdated)
    updateCategoriesInDB(username, categoriesUpdated)
  }

  //@ts-ignore
  const handleDeleteCategory = (idOfProductToDelete: string, username: string) => {
    if (!categories) return
    //1. copy du state
    const categoriesCopy = deepClone(categories)

    //2. manip de la copie state
    const categoriesUpdated = categoriesCopy.filter((product) => product.id !== idOfProductToDelete)

    //3. update du state
    setCategories(categoriesUpdated)
    // updateProducts(username, categoriesUpdated)
  }

  const toggleAllCategories = () => {
    const categoriesUpdated = categories.map((category) => ({
      ...category,
      isActive: false, // Désactiver "tous les filtres produit individuels"
    }))

    setCategoryAll({ ...categoryAll, isActive: true }) // Activer "Tous"
    setCategoryMenus({ ...categoryMenus, isActive: false }) // Désactiver "Produits"
    setCategories(categoriesUpdated)
  }

  const toggleCategoryById = (idCategoryToToggle: string) => {
    const categoriesUpdated = categories.map((category) => ({
      ...category,
      isActive: category.id === idCategoryToToggle,
    }))

    setCategoryAll({ ...categoryAll, isActive: false }) // Désactiver le bouton "Tous"
    setCategoryMenus({ ...categoryMenus, isActive: false }) // Désactiver le bouton "Produits"
    setCategories(categoriesUpdated)
  }

  const toggleMenusCategory = () => {
    const isCurrentlyActive = categoryMenus.isActive ?? false // fallback value : si jamais ça vaut undefined, "false" sera assigné au lieu de undefined.

    // Si déjà actif, on ne fait rien
    if (isCurrentlyActive) return

    // 1. Activer la catégorie "Produits"
    setCategoryMenus({ ...categoryMenus, isActive: true })

    // 2. Désactiver toutes les autres catégories standards
    const categoriesUpdated = categories.map((category) => ({
      ...category,
      isActive: false,
    }))
    setCategories(categoriesUpdated)

    // 3. Désactiver aussi le bouton "Tous"
    setCategoryAll({ ...categoryAll, isActive: false })
  }

  //@ts-ignore
  const handleEditCategory = (categoryBeingEdited: Category, username: string) => {
    // 1. copie du state (deep clone)
    if (!categories) return
    const categoriesCopy = deepClone(categories)

    // 2. manip de la copie du state
    const indexOfCategoryToEdit = categories.findIndex(
      (category) => category.id === categoryBeingEdited.id
    )
    categoriesCopy[indexOfCategoryToEdit] = categoryBeingEdited

    // 3. update du state
    setCategories(categoriesCopy)
    // updateMenus(username, categoriesCopy)
  }

  //@ts-ignore
  const resetCategories = (username: string) => {
    setCategories(fakeCategories.SMALL)
    // updateMenus(username, fakeMenu.SMALL)
  }

  return {
    categories,
    setCategories,
    handleAddCategory,
    handleDeleteCategory,
    handleEditCategory,
    resetCategories,
    toggleCategoryById,
    categoryAll,
    toggleAllCategories,
    toggleMenusCategory,
    categoryMenus,
  }
}
