import { ILink } from "@/constants/headerLinks";
import { Link } from "react-router-dom";

interface Props extends ILink {}

export const HeaderLink:React.FC<Props> = ({href,label})=>{
  return <h4>
      <Link to={href}>
      {label}
      </Link>
    </h4>
}
