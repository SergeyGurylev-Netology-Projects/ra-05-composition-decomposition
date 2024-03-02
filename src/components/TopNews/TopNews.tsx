/**
 * Список топ-новостей
 */
import {TopNewsItem} from "./TopNewsItem.tsx";

export function TopNews() {

    return (
        <>
            <ul>
                <TopNewsItem
                    id = "1"
                />
                <TopNewsItem
                    id = "2"
                />
                <TopNewsItem
                    id = "3"
                />
            </ul>
        </>
    )
}
