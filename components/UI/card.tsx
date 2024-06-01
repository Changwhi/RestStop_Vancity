import { ChildrenProps } from "@/types/ui"

export default function Card(props: ChildrenProps) {
    return (
        <>
            <li className="w-full sm:w-5/6 flex flex-col border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            {props.children}
            </li>
        </>
    )
} 