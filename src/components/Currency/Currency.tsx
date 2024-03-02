/**
 * Курсы валют
 */
import {CurrencyItem} from "./CurrencyItem.tsx";

export function Currency() {

    return (
        <>
            <ul>
                <CurrencyItem
                    id = "1"
                />
                <CurrencyItem
                    id = "2"
                />
                <CurrencyItem
                    id = "3"
                />
            </ul>
        </>
    )
}
