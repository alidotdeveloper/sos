import React from "react";
import { cva, type VariantProps } from "class-variance-authority";


const typography= cva("", {
    variants: {
        size: {
            h1: ['text-h1'],
            h2: ['text-h2'],
            h3: ['text-h3'],
            h4: ['text-h4'],
            h5: ['text-h5'],
            h6:['text-h6'],
            h7: ['text-h7'],
            xl: ['text-xl'],
            lg: ['text-lg'],
            md: ['text-md'],
            sm:['text-sm'],    
        }
    },
    defaultVariants: {
        size: "lg"    
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof typography> {
        as?: React.ElementType;
  }
  

export const Typography: React.FC<TypographyProps> = ({
    className = '',
    size,
    as: Component = 'span',
    ...props
}) => {
    return <Component className={`${typography({ size })} ${className}`} {...props} />;
}