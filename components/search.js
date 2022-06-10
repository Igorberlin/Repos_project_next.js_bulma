import Select from "./shared/select";
import TextInput from "./shared/text-input";
import LANGUAGES from "../constants/languages.constant";
import styles from "./search.module.scss";

const Search = (props) => {
    const { language, searchText, onSearchTextChange, onLanguageChange } =
        props;
    const languages = [{ value: "", label: "ALL" }, ...LANGUAGES];

    return (
        <div className={styles.search}>
            <TextInput
                className={styles.searchInput}
                label="Repo Search"
                value={searchText}
                onChange={(value) => onSearchTextChange(value)}
            />
            <Select
                className={styles.languageSelect}
                label="Language"
                value={language}
                onChange={(value) => onLanguageChange(value)}
                options={languages}
            />
        </div>
    );
};

export default Search;
