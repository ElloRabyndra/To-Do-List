export default function GradientBackground({ checkTheme }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 opacity-80 
        ${checkTheme(
          "bg-gradient-to-r from-transparent via-gray-500/20 to-transparent",
          "bg-gradient-to-r from-transparent via-gray-500/40 to-transparent"
        )}
        `}
      ></div>
    </div>
  );
}
