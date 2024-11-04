import React from "react";
import { SectionProps } from "../types/TypesComponents";

export const SectionContainer: React.FC<SectionProps> = ({className = "", children}) =>(
    <>
    <section className={`${className} w-full mx-auto md:max-w-6xl max-w-2xl pb-10`} >
     {children} 
    </section>
    </>
)

