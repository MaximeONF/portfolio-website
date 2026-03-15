import { useEffect, useState } from 'react';
import { Sparkles, Zap, Box, Layers } from 'lucide-react';

export default function Hero3DScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative w-full max-w-3xl aspect-square"
        style={{
          transform: `perspective(1200px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="absolute inset-0 animate-float" style={{ animationDelay: '0s' }}>
          <div
            className="absolute top-[15%] left-[10%] w-72 h-96 glassmorphism-dark rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
            style={{
              transform: `translateZ(60px) rotateY(-15deg)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 via-transparent to-[#4ECDC4]/20"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B6B] animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFD93D] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 rounded-full bg-[#51CF66] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="h-3 bg-white/30 rounded-full w-3/4 animate-pulse-slow"></div>
                <div className="h-3 bg-white/20 rounded-full w-full animate-pulse-slow" style={{ animationDelay: '0.3s' }}></div>
                <div className="h-3 bg-white/20 rounded-full w-5/6 animate-pulse-slow" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <div className="flex items-center justify-center h-32 bg-white/10 rounded-2xl mb-4 glow-purple">
                <Sparkles className="w-12 h-12 text-white/60" />
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/20 rounded-full w-full"></div>
                <div className="h-2 bg-white/15 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 animate-float" style={{ animationDelay: '0.5s' }}>
          <div
            className="absolute top-[25%] right-[5%] w-80 h-72 glassmorphism-light rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
            style={{
              transform: `translateZ(100px) rotateY(10deg)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/30 via-transparent to-[#FF6B6B]/20"></div>
            <div className="p-8 relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] flex items-center justify-center glow-accent animate-pulse-slow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="h-3 bg-black/20 rounded-full w-24 mb-2"></div>
                  <div className="h-2 bg-black/10 rounded-full w-32"></div>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#51CF66]"></div>
                  <div className="h-2 bg-black/10 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#51CF66]"></div>
                  <div className="h-2 bg-black/10 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-black/20"></div>
                  <div className="h-2 bg-black/5 rounded-full flex-1"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="h-16 bg-white/50 rounded-xl glow-soft"></div>
                <div className="h-16 bg-white/50 rounded-xl glow-soft" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-16 bg-white/50 rounded-xl glow-soft" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 animate-float" style={{ animationDelay: '1s' }}>
          <div
            className="absolute top-[55%] left-[15%] w-64 h-64 glassmorphism-purple rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
            style={{
              transform: `translateZ(40px) rotateY(-10deg) rotateX(5deg)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/30 to-[#A78BFA]/30"></div>
            <div className="p-6 relative z-10 flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4ECDC4] to-[#44A8A0] flex items-center justify-center mb-4 glow-blue animate-pulse-slow">
                <Box className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2 w-full">
                <div className="h-3 bg-white/30 rounded-full w-3/4 mx-auto"></div>
                <div className="h-2 bg-white/20 rounded-full w-1/2 mx-auto"></div>
              </div>
              <div className="mt-6 flex space-x-2">
                <div className="w-8 h-8 rounded-lg bg-white/20"></div>
                <div className="w-8 h-8 rounded-lg bg-white/30"></div>
                <div className="w-8 h-8 rounded-lg bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[10%] right-[20%] animate-float-slow">
          <div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD93D]/40 to-[#FFA07A]/40 glow-warm"
            style={{
              transform: `translateZ(80px)`,
              backdropFilter: 'blur(20px)',
            }}
          ></div>
        </div>

        <div className="absolute bottom-[20%] right-[10%] animate-float-slow" style={{ animationDelay: '0.7s' }}>
          <div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-[#A78BFA]/50 to-[#8B5CF6]/50 glow-purple"
            style={{
              transform: `translateZ(50px)`,
              backdropFilter: 'blur(15px)',
            }}
          ></div>
        </div>

        <div className="absolute top-[40%] right-[25%] animate-spin-slow">
          <div
            className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#4ECDC4]/60 to-[#51CF66]/60 glow-cyan rotate-45"
            style={{
              transform: `translateZ(70px)`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="absolute inset-2 bg-white/10 rounded-md"></div>
          </div>
        </div>

        <div className="absolute bottom-[15%] left-[25%] animate-float" style={{ animationDelay: '1.5s' }}>
          <div
            className="w-20 h-20 rounded-2xl glassmorphism-accent border border-[#FF6B6B]/30 flex items-center justify-center"
            style={{
              transform: `translateZ(30px) rotateZ(15deg)`,
            }}
          >
            <Layers className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="absolute top-[20%] left-[40%] w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}