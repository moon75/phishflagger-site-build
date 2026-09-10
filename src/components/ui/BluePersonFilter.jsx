export default function BluePersonFilter({ id }) {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <filter id={id} colorInterpolationFilters="sRGB">
          {/* Isolate purple people, preserving neutral envelopes and green checks. */}
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 -100 100 0 -1" />
          <feComposite in2="SourceGraphic" operator="in" result="personMask" />
          <feFlood floodColor="#2563EB" />
          <feComposite in2="personMask" operator="in" result="bluePerson" />
          <feComposite in="SourceGraphic" in2="personMask" operator="out" />
          <feComposite in="bluePerson" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
