export const calculateETA = (distance: number, speed: number): number => {
    return (distance / speed) * 60; // ETA em minutos
  };