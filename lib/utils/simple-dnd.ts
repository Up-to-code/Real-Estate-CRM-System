import { useState, useCallback } from 'react';

export interface DragItem {
  id: string;
  type: string;
  data?: any;
}

export interface DropZone {
  id: string;
  type: string;
  accepts: string[];
}

export const useDraggable = (item: DragItem) => {
  const handleDragStart = useCallback((event: React.DragEvent) => {
    event.dataTransfer.setData('application/json', JSON.stringify(item));
    event.dataTransfer.effectAllowed = 'move';
  }, [item]);

  return {
    draggable: true,
    onDragStart: handleDragStart,
    style: { cursor: 'grab' },
  };
};

export const useDroppable = (
  zone: DropZone,
  onDrop?: (item: DragItem, zoneId: string) => void
) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setIsOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsOver(false);
  }, []);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    setIsOver(false);
    
    const itemData = event.dataTransfer.getData('application/json');
    if (itemData) {
      try {
        const item: DragItem = JSON.parse(itemData);
        if (onDrop && zone.accepts.includes(item.type)) {
          onDrop(item, zone.id);
        }
      } catch (error) {
        console.error('Failed to parse drag item data:', error);
      }
    }
  }, [zone, onDrop]);

  return {
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
    style: { 
      cursor: 'pointer',
      backgroundColor: isOver ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
      border: isOver ? '2px dashed #3b82f6' : '2px solid transparent',
      transition: 'all 0.2s ease',
    },
  };
};
