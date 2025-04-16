export const getCart = () => JSON.parse(localStorage.getItem('movieCart')) || [];
export const updateCart = (cart) => localStorage.setItem('movieCart', JSON.stringify(cart));
export const cartHasItems = () => getCart().length > 0;