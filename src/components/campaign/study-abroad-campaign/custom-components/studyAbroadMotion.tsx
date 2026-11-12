export default function StudyAbroadMotion() {
  return (
    <style>{`
      @keyframes study-abroad-kenburns {
        from { transform: scale(1); }
        to { transform: scale(1.08) translate3d(-1.5%, -1%, 0); }
      }
      .study-abroad-kenburns { animation: study-abroad-kenburns 32s ease-in-out infinite alternate; }
      @keyframes study-abroad-rise {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: none; }
      }
      .study-abroad-rise { animation: study-abroad-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
      @keyframes study-abroad-line {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }
      .study-abroad-line { transform-origin: left center; animation: study-abroad-line 0.8s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both; }
      .study-abroad-cta { position: relative; isolation: isolate; overflow: hidden; }
      .study-abroad-cta::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%);
        transform: translateX(-130%);
        transition: transform 0.6s ease;
      }
      .study-abroad-cta:hover::after { transform: translateX(130%); }
      @media (prefers-reduced-motion: reduce) {
        .study-abroad-kenburns, .study-abroad-rise, .study-abroad-line { animation: none; }
        .study-abroad-cta::after { display: none; }
      }
    `}</style>
  );
}
