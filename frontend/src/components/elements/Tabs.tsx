'use client'
import classnames from 'classnames';
import React, { useState } from 'react'

type Props = {
    options: string[];
    onSelect: (option: string) => void;
    className?: string;
}

const Tabs = ({ options, onSelect, className }: Props) => {
    const [selected, setSelected] = useState(options[0])
    const handleClick = (option: string) => {
        onSelect(option);
        setSelected(option);
    }
    const containerClasses = classnames('flex bg-dark-250 rounded-full text-center', className)

    const renderOption = (option: string) => {
        const classes = classnames("w-28 sm:w-48 rounded-full py-4 transition-color duration-300 cursor-pointer",
            { "text-black bg-white": selected === option }
        )
        return <li onClick={() => { handleClick(option) }} key={option} className={classes}>{option}</li>
    }

    return (
        <ul className={containerClasses}>
            {options.map(renderOption)}
        </ul>
    )
}

export default Tabs