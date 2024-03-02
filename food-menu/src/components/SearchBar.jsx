import { useState } from "react";
import LiveSearch from "./LiveSearch";

const SearchBar = () => {

    const [results, setResults] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);

    const profiles = [
        { id: "1", name: "Allie Grater" },
        { id: "2", name: "Aida Bugg" },
        { id: "3", name: "Gabrielle" },
        { id: "4", name: "Grace" },
        { id: "5", name: "Hannah" },
        { id: "6", name: "Heather" },
        { id: "7", name: "John Doe" },
        { id: "8", name: "Anne Teak" },
        { id: "9", name: "Audie Yose" },
        { id: "10", name: "Addie Minstra" },
        { id: "11", name: "Anne Ortha" },
      ];
  
    const handleChange = (e) => {
      const { target } = e;
      if (!target.value.trim()) return setResults([]);
  
      const filteredValue = profiles.filter((profile) =>
        profile.name.toLowerCase().startsWith(target.value.toLowerCase())
      );
      setResults(filteredValue);
    };

    return (
        <div>
      <LiveSearch
        results={results}
        value={selectedProfile?.name}
        renderItem={(item) => <p>{item.name}</p>}
        onChange={handleChange}
        onSelect={(item) => setSelectedProfile(item)}
      />
        </div>
    );
}
export default SearchBar;