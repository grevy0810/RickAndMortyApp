import { Button, MenuItem, Select, TextField } from "@mui/material"

interface FilterProps {
    filterType: string;
    setFilterType: (value: string) => void;
    filterOptions: string[];
    searchValue: string;
    setSearchValue: (value: string) => void;
    fetchCharacters: (page:number, search:string, filterType: string) => void;
}
const CharacterFilter = ({filterType, setFilterType, filterOptions, searchValue, setSearchValue, fetchCharacters}:FilterProps) => {
    return (
        <div className="flex gap-4 justify-center mb-5">
            <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            {filterOptions.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
            </Select>
            <TextField
            label="Search"
            variant="outlined"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={() => fetchCharacters( 1, searchValue, filterType)}>
                Search
            </Button>
      </div>
    )
}

export default CharacterFilter;