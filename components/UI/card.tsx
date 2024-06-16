import { ChildrenProps } from "@/types/ui"

export default function Card(props: ChildrenProps) {
    return (
        <>
            <li className="w-full sm:w-4xl flex flex-col border border-solid border-slate-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 py-6 px-2 rounded-3xl shadow-xl">
            {props.children}
            </li>
        </>
    )
} 