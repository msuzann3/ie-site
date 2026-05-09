import {
  Compass,
  ShieldCheck,
  GraduationCap,
  ArrowUp,
  Route,
  Layers,
  Mail,
  Calendar,
  Mic,
  Users,
  LucideProps,
} from 'lucide-react'

const ICONS: Record<string, React.FC<LucideProps>> = {
  Compass,
  ShieldCheck,
  GraduationCap,
  ArrowUp,
  Route,
  Layers,
  Mail,
  Calendar,
  Mic,
  Users,
}

interface IconProps extends LucideProps {
  name: string
}

export default function Icon({ name, ...props }: IconProps) {
  const Component = ICONS[name]
  if (!Component) return null
  return <Component strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props} />
}
