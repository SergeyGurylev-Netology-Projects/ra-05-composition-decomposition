/**
 * Категории поиска (Видео, Картинки, ...)
 */
import {SearchCategoriesItem} from "./SearchCategoriesItem.tsx";

export function SearchCategories() {

    return (
        <>
            <ul>
                <SearchCategoriesItem
                    id = "0"
                />
                <SearchCategoriesItem
                    id = "1"
                />
                <SearchCategoriesItem
                    id = "2"
                />
                <SearchCategoriesItem
                    id = "3"
                />
            </ul>
        </>
    )
}