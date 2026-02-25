export const MobileHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center py-6 px-6">
      <div className="flex items-center gap-2 drop-shadow-sm">
        <span className="material-symbols-outlined text-white/90 text-2xl drop-shadow-md">
          water_drop
        </span>
        <h1 className="text-xl font-serif font-bold tracking-tight text-white drop-shadow-md">
          Lumière
        </h1>
      </div>
    </header>
  );
};