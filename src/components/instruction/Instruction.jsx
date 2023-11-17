// import { useState } from 'react';
import './Instruction.css';
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
}
  from 'react-icons/pi';
import { FiChevronDown, FiX } from 'react-icons/fi';

export default function Instruction({ toggleInstructionMenu, isInstructionMenuOpen }) {
  return (
    <div className="instruction-container mx-auto lg:mr-40 max-w-[274px] inset-x-0 absolute">
      <div className={`bg-[#232323] px-6 rounded-t-3xl ${isInstructionMenuOpen ? 'pt-2' : 'py-2 rounded-b-3xl'}`}>
        <button type="button" className="absolute right-5 w-[30px] h-[30px] top-3" onClick={toggleInstructionMenu}>
          {isInstructionMenuOpen ? (
            <FiX className="text-slate-50 w-[25px] h-[25px]" aria-label="Close instruction menu" />
          ) : (
            <FiChevronDown className="text-slate-50 w-[25px] h-[25px]" aria-label="Open instruction menu" />
          )}
        </button>
        <h3 className="uppercase text-center text-slate-50 text-lg font-bold py-2">
          Instructions
        </h3>
      </div>
      <ul className={`instruction-menu ${isInstructionMenuOpen ? 'show' : ''} bg-[#232323] px-6 pt-2 pb-4 rounded-es-3xl rounded-b-3xl`}>
        <li className="instruction-step">
          <span className="px-1.5">
            <PiNumberCircleOneBold className="w-6 h-6" />
          </span>
          Enter your ingredient(s)
        </li>
        <li className="instruction-step">
          <span className="px-1.5">
            <PiNumberCircleTwoBold className="w-6 h-6" />
          </span>
          Click search icon or enter
        </li>
        <li className="instruction-step">
          <span className="px-1.5">
            <PiNumberCircleThreeBold className="w-6 h-6" />
          </span>
          Browse through recipe list
        </li>
        <li className="instruction-step">
          <span className="px-1.5">
            <PiNumberCircleFourBold className="w-6 h-6" />
          </span>
          Pick a receipe to make!
        </li>
      </ul>
    </div>
  );
}
