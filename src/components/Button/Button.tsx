import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

// export const ButtonAlt: FC<ButtonProps> = ({
//   className,
//   children,
//   ...props
// }) => {
//   return (
//     <button className={cn("button accent", className)} {...props}>
//       {children}
//     </button>
//   );
// };

function Button({
    children,
    className,
    appearance = 'small',
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(styles['button'], styles['accent'], className, {
                [styles['small']]: appearance === 'small',
                // eslint-disable-next-line comma-dangle
                [styles['big']]: appearance === 'big',
            })}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
