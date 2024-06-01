import { HeaderLink } from "@/components/features/HeaderLink/HeaderLink"
import { useHeaderLinks } from "@/components/features/HeaderLink/useHeaderLinks"
import { Button } from "@/components/ui/button"
import { useLogout } from "@/lib/useLogout"

const HEADER_EXIT_TEXT = "Выйти"

export const Header = ()=>{

  const links = useHeaderLinks()
  const logout = useLogout()

  if(!links) return null;

  return <div className="flex items-center gap-4 justify-center text-lg font-inter p-4">
    {
      links.map((link)=><HeaderLink key={link.label} href={link.href} label={link.label}/>)
    }
    <Button onClick={logout}> 
      {HEADER_EXIT_TEXT}
    </Button>
  </div>
}
