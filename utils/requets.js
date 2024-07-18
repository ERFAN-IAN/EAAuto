export const fetchAdverts = (p) => {
  const NEXT_PUBLIC_API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null;
  return {
    queryKey: [
      `${p.color ? p.color : "All"}`,
      `${p.brand ? p.brand : "All"}`,
      `${p.type ? p.type : "All"}`,
      `${p.transmission ? p.transmission : "All"}`,
      `${p.searchText ? p.searchText : ""}`,
      `${p.yearMin ? p.yearMin : 1920}`,
      `${p.yearMax ? p.yearMax : new Date().getFullYear()}`,
    ],
    queryFn: async () => {
      const queryString = new URLSearchParams(p).toString();
      const response = await fetch(
        `${NEXT_PUBLIC_API_DOMAIN}/search?${queryString}`
      );
      const tj = await response.json();
      return tj;
    },
  };
};
