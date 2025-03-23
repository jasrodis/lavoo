interface LavooLogoProps {
  className?: string
}

export function LavooLogo({ className }: LavooLogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="20" fill="#3B82F6" />
      <path d="M30 25H40V75H30V25Z" fill="white" />
      <path
        d="M45 35C45 29.477 49.477 25 55 25H65C70.523 25 75 29.477 75 35V45C75 50.523 70.523 55 65 55H55V75H45V35Z"
        fill="white"
      />
      <circle cx="60" cy="40" r="8" fill="#3B82F6" />
    </svg>
  )
}

