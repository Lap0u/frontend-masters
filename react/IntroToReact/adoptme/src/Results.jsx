import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};
export default Results;
