
interface AcordionProps {
    title: string;
    description: string;
  }

const AcordionProduct: React.FC<AcordionProps> = ({title, description}) =>{

    return(
    <>
    <h2 id="accordion-flush-heading-2">
    <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
      <span>{title}</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  
  <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  </div>
  </>
    )
}
export default AcordionProduct;

