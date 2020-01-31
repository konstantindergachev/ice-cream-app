export function formatPrice(cents) {
  return (cents / 100).toLocaleString('ru-Ru', {
    style: 'currency',
    currency: 'UAH',
  });
}

export const rando = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function getTotalPrice(basket, iceCreams) {
  const basketIds = Object.keys(basket);
  const total = basketIds.reduce((prevTotal, key) => {
    const iceCream = iceCreams[key];
    const count = basket[key];
    const isAvailable = iceCream && iceCream.status === 'available';
    if (isAvailable) {
      return prevTotal + count * iceCream.price;
    }
    return prevTotal;
  }, 0);
  const formatedTotal = formatPrice(total);
  return formatedTotal;
}
