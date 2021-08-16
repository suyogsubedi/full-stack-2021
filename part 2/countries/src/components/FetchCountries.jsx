const FetchCountries = ({ countries, search, searchResults }) => {
  return (
    <div>
      {countries
        .filter((country) => {
          if ({ search } === "") {
            return country;
          } else if (
            country.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return country;
          }
        })
        .map((country) => (
          <div>
            <p>{country.name}</p>
          </div>
        ))}
    </div>
  );
};

export default FetchCountries;
