export const calculateTariff = (distance: number, duration: number): number => {
    const baseFare = 5.0; // Tarifa base
    const perKm = 2.0; // Tarifa por km
    const perMinute = 0.5; // Tarifa por minuto
    return baseFare + distance * perKm + duration * perMinute;
  };