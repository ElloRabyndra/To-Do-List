export default function AnimatedBackground({ checkTheme }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className={`absolute w-64 h-64 ${checkTheme("bg-gradient-to-br from-amber-200/30 to-orange-300/20", "bg-gradient-to-br from-amber-400/20 to-orange-500/10")} rounded-full blur-3xl animate-float-slow`} style={{top: "10%", left: "10%"}} />
      
      <div className={`absolute w-48 h-48 ${checkTheme("bg-gradient-to-br from-blue-200/30 to-cyan-300/20", "bg-gradient-to-br from-blue-400/20 to-cyan-500/10")} rounded-full blur-3xl animate-float-medium`} style={{top: "60%", right: "15%"}} />
      
      <div className={`absolute w-32 h-32 ${checkTheme("bg-gradient-to-br from-gray-200/30 to-pink-300/20", "bg-gradient-to-br from-gray-400/20 to-pink-500/10")} rounded-full blur-2xl animate-float-fast`} style={{bottom: "20%", left: "20%"}} />
      
      <div className={`absolute w-40 h-40 ${checkTheme("bg-gradient-to-br from-green-200/30 to-emerald-300/20", "bg-gradient-to-br from-green-400/20 to-emerald-500/10")} rounded-full blur-2xl animate-float-slow`} style={{top: "30%", right: "30%"}} />
      
      <div className={`absolute w-24 h-24 ${checkTheme("bg-gradient-to-br from-yellow-200/40 to-amber-300/30", "bg-gradient-to-br from-yellow-400/25 to-amber-500/15")} rounded-full blur-xl animate-float-medium`} style={{bottom: "40%", right: "10%"}} />
      
      <div className={`absolute w-56 h-56 ${checkTheme("bg-gradient-to-br from-rose-200/25 to-red-300/15", "bg-gradient-to-br from-rose-400/15 to-red-500/8")} rounded-full blur-3xl animate-float-fast`} style={{top: "5%", right: "5%"}} />
    </div>
  );
}