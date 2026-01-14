"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Github, ArrowLeft } from "lucide-react";
import { loginWithGithub, login, signup } from "./actions";

// --- TYPE DEFINITIONS ---

export interface Testimonial {
  avatarSrc: string;
  name: string;
  handle: string;
  text: string;
}

interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  heroImageSrc?: string;
  testimonials?: Testimonial[];
  onResetPassword?: () => void;
  onCreateAccount?: () => void;
}

// --- SUB-COMPONENTS ---

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-none border border-[#27272a] bg-[#0a0a0a] transition-colors focus-within:border-[#ededed] focus-within:bg-[#000000]">
    {children}
  </div>
);

const TestimonialCard = ({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: string;
}) => (
  <div
    className={`animate-in fade-in slide-in-from-bottom-8 duration-1000 ${delay} flex items-start gap-3 rounded-none bg-[#0a0a0a] border border-[#27272a] p-5 w-64`}
  >
    <img
      src={testimonial.avatarSrc}
      className="h-10 w-10 object-cover rounded-none"
      alt="avatar"
    />
    <div className="text-sm leading-snug">
      <p className="flex items-center gap-1 font-bold font-mono text-[#ededed]">
        {testimonial.name}
      </p>
      <p className="text-[#a1a1aa] text-xs font-mono">{testimonial.handle}</p>
      <p className="mt-2 text-[#ededed]/80 italic">"{testimonial.text}"</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

export default function SignInPage({
  title = (
    <span className="font-bold tracking-tighter text-[#ededed]">
      ENTER THE VOID
    </span>
  ),
  description = "Authenticate to access your workspace.",
  heroImageSrc = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  testimonials = [
    {
      avatarSrc: "https://github.com/shadcn.png",
      name: "Dev_01",
      handle: "@frontend_wiz",
      text: "The interface is pure chaos, yet I can't look away. It's beautiful.",
    },
    {
      avatarSrc: "https://github.com/leerob.png",
      name: "SysAdmin",
      handle: "@root_user",
      text: "Finally, a login screen that understands the darkness of my soul.",
    },
  ],
}: SignInPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(formData: FormData) {
    setIsLoading(true);
    setMessage(null);
    setIsError(false);
    
    const result = await login(formData);
    
    if (result?.error) {
      setMessage(result.error);
      setIsError(true);
      setIsLoading(false);
    }
    // If successful, redirect happens server-side
  }

  async function handleSignup(formData: FormData) {
    setIsLoading(true);
    setMessage(null);
    setIsError(false);

    const result = await signup(formData);

    if (result?.error) {
      setMessage(result.error);
      setIsError(true);
    } else if (result?.message) {
      setMessage(result.message);
      setIsError(false);
    }
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans w-full bg-[#050505] text-[#ededed] overflow-hidden selection:bg-white selection:text-black relative">
      <Link href="/" className="absolute top-8 left-8 z-50 text-zinc-500 hover:text-white transition-colors">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      {/* Left column: sign-in form */}
      <section className="flex-1 flex items-center justify-center p-8 relative">
        <div className="w-full max-w-md z-10">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-4xl md:text-5xl font-bold leading-tight">
                {title}
              </h1>
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-[#a1a1aa] font-mono text-sm uppercase tracking-wider">
                {description}
              </p>
            </div>

            <div className="space-y-5">
              <form className="space-y-5" action={handleLogin}>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 space-y-2">
                  <label className="text-xs font-bold text-[#a1a1aa] uppercase tracking-wider pl-1">
                    Email Address
                  </label>
                  <GlassInputWrapper>
                    <input
                      name="email"
                      type="email"
                      placeholder="user@example.com"
                      className="w-full bg-transparent text-sm p-4 text-[#ededed] placeholder:text-[#3f3f46] focus:outline-none font-mono"
                      suppressHydrationWarning
                      required
                    />
                  </GlassInputWrapper>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 space-y-2">
                  <label className="text-xs font-bold text-[#a1a1aa] uppercase tracking-wider pl-1">
                    Password
                  </label>
                  <GlassInputWrapper>
                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full bg-transparent text-sm p-4 pr-12 text-[#ededed] placeholder:text-[#3f3f46] focus:outline-none font-mono"
                        suppressHydrationWarning
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 text-[#a1a1aa] hover:text-[#ededed] transition-colors" />
                        ) : (
                          <Eye className="w-4 h-4 text-[#a1a1aa] hover:text-[#ededed] transition-colors" />
                        )}
                      </button>
                    </div>
                  </GlassInputWrapper>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 flex items-center justify-between text-xs font-mono">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="appearance-none w-4 h-4 border border-[#27272a] bg-[#0a0a0a] checked:bg-[#ededed] checked:border-[#ededed] transition-all cursor-pointer"
                    />
                    <span className="text-[#a1a1aa] group-hover:text-[#ededed] transition-colors">
                      REMEMBER_ME
                    </span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="hover:text-[#ededed] text-[#ededed]/60 transition-colors uppercase tracking-wider"
                  >
                    Reset password
                  </Link>
                </div>

                {message && (
                  <div className={`p-4 text-xs font-mono border ${isError ? 'border-red-900 bg-red-950/20 text-red-500' : 'border-green-900 bg-green-950/20 text-green-500'} animate-in fade-in`}>
                    {message}
                  </div>
                )}

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 space-y-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-none bg-[#ededed] text-[#050505] py-4 font-bold font-mono hover:bg-[#a1a1aa] transition-colors uppercase tracking-widest border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "CALCULATING..." : "SIGN IN"}
                    </button>
                    <button
                      formAction={handleSignup}
                      disabled={isLoading}
                      className="w-full rounded-none bg-transparent text-[#ededed] py-2 font-bold font-mono hover:bg-[#27272a] transition-colors uppercase tracking-widest border border-transparent text-xs"
                    >
                      CREATE ACCOUNT
                    </button>
                </div>
              </form>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 relative flex items-center justify-center py-2">
                <span className="w-full border-t border-[#27272a]"></span>
                <span className="px-4 text-xs font-mono text-[#52525b] bg-[#050505] absolute uppercase tracking-widest">
                  Or authenticate with
                </span>
              </div>

              <button
                onClick={() => loginWithGithub()}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 w-full flex items-center justify-center gap-3 border border-[#27272a] bg-[#0a0a0a] text-[#ededed] rounded-none py-4 hover:bg-[#27272a] hover:border-[#52525b] transition-all group"
              >
                <Github className="size-5 group-hover:scale-110 transition-transform" />
                <span className="font-bold font-mono uppercase tracking-widest">
                  GitHub
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right column: hero image + testimonials */}
      {heroImageSrc && (
        <section className="hidden md:block flex-1 relative p-4 bg-[#0a0a0a]">
          <div
            className="animate-in fade-in zoom-in-95 duration-1000 delay-300 absolute inset-4 border border-[#27272a] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          </div>

          <div className="absolute top-8 right-8 z-10">
            <div className="inline-block px-3 py-1 text-[10px] font-bold border border-[#ededed] bg-[#050505] text-[#ededed] uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-700 delay-700">
              System v1.0
            </div>
          </div>

          {testimonials.length > 0 && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 w-full justify-center px-8">
              <TestimonialCard
                testimonial={testimonials[0]}
                delay="delay-700"
              />
              {testimonials[1] && (
                <div className="hidden xl:flex">
                  <TestimonialCard
                    testimonial={testimonials[1]}
                    delay="delay-1000"
                  />
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
