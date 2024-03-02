/**
 * Лента ссылок в топе страницы
 */
import {NewCategoriesItem} from "./NewCategoriesItem.tsx";

export function NewCategories() {

    return (
        <>
            <ul>
                <NewCategoriesItem
                    name = "Сейчас в СМИ"
                />
                <NewCategoriesItem
                    name = "в Германии"
                />
                <NewCategoriesItem
                    name = "Рекомендуем"
                />
            </ul>
        </>
    )
}
