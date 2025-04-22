"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronUp } from "lucide-react"

interface RulesAccordionProps {
  id: string
  name: string
  required?: boolean
  textColor?: string
}

export default function RulesAccordion({
  id,
  name,
  required = false,
  textColor = "text-gray-300",
}: RulesAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <Checkbox
          id={id}
          name={name}
          required={required}
          className="border-gray-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
        />
        <div>
          <label
            htmlFor={id}
            className={`text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer ${textColor}`}
          >
            I agree to the rules
          </label>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 text-xs text-gray-400 hover:text-yellow-400 focus:outline-none transition-colors"
            aria-expanded={isOpen}
          >
            {isOpen ? <ChevronUp className="h-4 w-4 inline" /> : <ChevronDown className="h-4 w-4 inline" />}
            <span className="ml-1">{isOpen ? "Hide rules" : "View rules"}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`pl-7 border-l-2 border-yellow-500/30 ml-1.5 ${textColor} text-opacity-80`}>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>No inappropriate language or moves</li>
            <li>No provocation</li>
            <li>No fighting</li>
            <li>Respect each other</li>
            <li>Respect the timing</li>
          </ul>
        </div>
      )}
    </div>
  )
}
