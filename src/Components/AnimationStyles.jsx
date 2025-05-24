export default function AnimationStyles() {
  return (
          <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(20px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(-10px) rotate(270deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(-15px) rotate(120deg); }
          66% { transform: translateY(10px) translateX(15px) rotate(240deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-25px) translateX(25px) rotate(180deg); }
        }
        
        @keyframes orbit-1 {
          0% { transform: translateX(80vw) translateY(20vh) rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: translateX(80vw) translateY(20vh) rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        
        @keyframes orbit-2 {
          0% { transform: translateX(20vw) translateY(70vh) rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: translateX(20vw) translateY(70vh) rotate(-360deg) translateX(40px) rotate(360deg); }
        }
        
        @keyframes orbit-3 {
          0% { transform: translateX(60vw) translateY(80vh) rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: translateX(60vw) translateY(80vh) rotate(360deg) translateX(30px) rotate(-360deg); }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-orbit-1 { animation: orbit-1 15s linear infinite; }
        .animate-orbit-2 { animation: orbit-2 12s linear infinite reverse; }
        .animate-orbit-3 { animation: orbit-3 10s linear infinite; }
      `}</style>
  );
}