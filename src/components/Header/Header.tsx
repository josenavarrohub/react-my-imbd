// Types
import { HeaderProps } from "./Header.types";

// Static files
import { ReactComponent as Logo } from "../../static/img/logo.svg";

// Styles
import styles from "./Header.module.scss";
import { useRef } from "react";
import { useKey } from "../../hooks/useKey";

// Component
const Header: React.FC<HeaderProps> = ({ query, setQuery }) => {
  // Reference
  const inputRef = useRef<HTMLInputElement>(null)

  // Effect
  useKey('Enter', (event: KeyboardEvent) => {
	inputRef.current?.focus()
	if (event.target === inputRef.current) return
	inputRef.current?.focus()
	setQuery('')
  })

  // JSX
  return (
    <header className={styles["c-header"]}>
      <nav className="c-navbar fixed-top navbar navbar-dark bg-dark">
        <div className="container">
          <Logo
            className={`${styles.logo} navbar-brand`}
            onClick={() => setQuery("")}
          />

          <input
		  	ref={inputRef}
            className={`${styles.input} form-control`}
            type="search"
            placeholder="Search movie..."
            aria-label="Search"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(event.target.value)
            }
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
