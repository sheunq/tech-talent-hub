
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to clone element with new className, useful for icons in sidebar
export function cloneElementWithClass(element: React.ReactElement, newClassName: string) {
    return React.cloneElement(element, {
        className: cn(element.props.className, newClassName),
    });
}
