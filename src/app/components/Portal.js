'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, containerId = 'modal-root' }) => {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    // Create or find the modal container
    let modalContainer = document.getElementById(containerId);
    
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = containerId;
      modalContainer.style.position = 'relative';
      modalContainer.style.zIndex = '9999';
      document.body.appendChild(modalContainer);
    }
    
    setContainer(modalContainer);
    setMounted(true);

    return () => {
      // Clean up: only remove if it's empty
      if (modalContainer && modalContainer.children.length === 0) {
        document.body.removeChild(modalContainer);
      }
    };
  }, [containerId]);

  if (!mounted || !container) {
    return null;
  }

  return createPortal(children, container);
};

export default Portal;
