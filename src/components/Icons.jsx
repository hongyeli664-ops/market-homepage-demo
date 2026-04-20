export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.65 16.65" strokeLinecap="round" />
    </svg>
  );
}

export function CartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 4H5L7.4 15.2A1 1 0 0 0 8.4 16H18.4A1 1 0 0 0 19.4 15.2L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.25" />
      <circle cx="18" cy="20" r="1.25" />
    </svg>
  );
}

export function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20C5.8 16.8 8.4 15 12 15C15.6 15 18.2 16.8 19 20" strokeLinecap="round" />
    </svg>
  );
}

export function OrderIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 9H15M9 13H15M9 17H13" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 12H19" strokeLinecap="round" />
      <path d="M12 5L19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.5L14.95 9.48L21.55 10.44L16.78 15.08L17.9 21.65L12 18.54L6.1 21.65L7.22 15.08L2.45 10.44L9.05 9.48L12 3.5Z" />
    </svg>
  );
}
