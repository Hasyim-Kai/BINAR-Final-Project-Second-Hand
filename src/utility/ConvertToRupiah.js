export const ConvertToRupiah = number => new Intl.NumberFormat("id-ID", {
   style: "currency",
   currency: "IDR",
   minimumFractionDigits: 0
}).format(number);