import { Link } from 'react-router-dom'

type StyledLinkProps = {
  linkText: string
  to: string
}

export const StyledLink = ({ linkText, to }: StyledLinkProps) => {
  return (
    <Link style={{ color: `#526ed3` }} to={to}>
      {linkText}
    </Link>
  )
}
