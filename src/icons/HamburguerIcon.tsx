import { IconProps } from "../types/TypesComponents";

export const HamburgueIcon: React.FC<IconProps> = ({className = ""}) =>(
<svg className={`${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
<path stroke="#ffbe00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M1 1h15M1 7h15M1 13h15"/>
</svg>
)
