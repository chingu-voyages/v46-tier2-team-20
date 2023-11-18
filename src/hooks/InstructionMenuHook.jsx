import { useState } from 'react';

export default function InstructionMenuHook() {
  const [isInstructionMenuOpen, setInstructionIsMenuOpen] = useState(false);

  const toggleInstructionMenu = () => {
    setInstructionIsMenuOpen(!isInstructionMenuOpen);
  };
  return {
    isInstructionMenuOpen,
    toggleInstructionMenu,
  };
}
