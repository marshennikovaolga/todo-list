import React from "react";
import { tw } from "twind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Tooltip({ openedTooltip, onDelete, closeTooltip }) {

    return (
        <div className={tw(openedTooltip ? 'visible' : 'invisible', 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-55 h-55 bg-white border border-gray-600 rounded flex items-center justify-center')}>
            <button className={tw`px-1 py-0.6 rounded text-black ml-2 absolute -top-6 -right-4`}
                type="button" aria-label="close-tooltip"
                onClick={() => {
                    closeTooltip();
                }}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className={tw`flex flex-col justify-between items-center w-full scale-300`}>
                <h1 className={tw('text-black p-2')} >are you sure?</h1>
                <button className={tw`px-2 py-1 m-2 rounded bg-gray-800 text-white`}
                    type="button" aria-label="submit"
                    onClick={() => {
                        onDelete();
                        closeTooltip();
                    }}>
                    yes
                </button>
            </div>
        </div>
    )
}
