const getTailwindColor = (color: string, strength: string) => {
    return `bg-${color}-${strength} hover:bg-${color}-${(parseInt(strength) + 100).toString()}`;
};

export default getTailwindColor;
