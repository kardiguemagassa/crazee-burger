import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
//@ts-ignore
import ProductEditForm from "./AdminPanel/ProductEditForm/ProductEditForm"
//@ts-ignore
import HintMessage from "./AdminPanel/ProductEditForm/HintMessage"
//@ts-ignore
import ProductAddForm from "./AdminPanel/ProductAddForm/ProductAddForm"
import { TabType } from "@/types/Tab"
import { ADMIN_TAB_LABEL } from "@/constants/tab"
import { IoPricetag } from "react-icons/io5"
import CategoryAddForm from "./AdminPanel/CategoryForm/CategoryAddForm"

export const getTabsConfig = (hasAlreadyBeenClicked?: boolean): TabType[] => [
  {
    index: ADMIN_TAB_LABEL.PRODUCT_ADD,
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <ProductAddForm />,
  },
  {
    index: ADMIN_TAB_LABEL.PRODUCT_EDIT,
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <ProductEditForm /> : <HintMessage />,
  },
  {
    index: ADMIN_TAB_LABEL.CATEGORY_ADD,
    label: "Créer une catégorie",
    Icon: <IoPricetag />,
    Content: <CategoryAddForm />,
  },
]

export const getTabSelected = (tabs: TabType[], currentTabSelected: ADMIN_TAB_LABEL) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}
