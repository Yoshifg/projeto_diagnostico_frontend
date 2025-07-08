import Link from 'next/link';
import cn from 'classnames';

interface Props  {
    isNavItem?: boolean;
    isSelected?: boolean;
    isMobile?: boolean;
    isBanner?: boolean;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement | HTMLAnchorElement>;
    className?: string;
    children: React.ReactNode;
    [rest: string]: unknown;
}

export default function NavLink({
    isNavItem,
    isSelected,
    isBanner,
    isMobile,
    href,
    onClick,
    className,
    children,
    ...rest
}: Props) {

    if (isMobile) {
        // só pra marcar usado
    }

    const computedClassName = cn(
        className,
        'rounded-md font-semibold',
        {
            'hover:text-blue-darknut': isNavItem,
            'text-blue-darknut': isSelected,
            'text-2xl sm:text-3xl': isBanner,
        }
    );

    if (!href) {
        return (
            <span className={computedClassName} role='button' onClick={onClick} {...rest}>
                {children}
            </span>
        );
    }

    return (
        <Link
            href={href}
            className={computedClassName}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Link>
    );
}