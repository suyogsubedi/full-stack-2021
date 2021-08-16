const SpecificCountry = ({ country }) => {
  return (
    <div>
      {country.map((value) => (
        <div>
          {value.name}
          {value.nativeName}
        </div>
      ))}
    </div>
  );
};

export default SpecificCountry;
