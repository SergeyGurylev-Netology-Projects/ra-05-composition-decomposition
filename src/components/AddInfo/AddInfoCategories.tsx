/**
 * Блок прочей информации под рекламой
 */
import {AddInfoCategoriesItem} from "./AddInfoCategoriesItem.tsx";

export function AddInfoCategories() {

    return (
        <ul>
            <AddInfoCategoriesItem
                name = "Погода"
            />
            <AddInfoCategoriesItem
                name = "Посещаемое"
            />
            <AddInfoCategoriesItem
                name = "Карта Германии"
            />
            <AddInfoCategoriesItem
                name = "Телепрограмма"
            />
            <AddInfoCategoriesItem
                name = "Эфир"
            />
        </ul>
    )
}