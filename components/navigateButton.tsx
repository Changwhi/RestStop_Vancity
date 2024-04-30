"use client";
import openGoogleMapApp from "@/lib/openGoogleMapApp";

const NavigateButton = () => {
    const openGoogleMapAppHandler = (lat: number, lon: number) => {
        openGoogleMapApp({ lat: lat, lon: lon });
    }
    return (
        <button
            className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 px-4 py-2 rounded-md font-bold"
            onClick={() => openGoogleMapAppHandler(37.7749, -122.4194)}
        >
            Navigate
        </button>
    );

}

export default NavigateButton