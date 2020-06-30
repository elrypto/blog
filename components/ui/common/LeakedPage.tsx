
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
  leakedSection: React.ReactNode;
  sectionSpacer?: number;
}


const LeakedPage: React.FC<Props> = ({ leakedSection, size, children, sectionSpacer }) => {
  const pageSize = size === 'md' ? 'max-w-md min-w-sm' : 'max-w-sm min-w-sm';
  const spacer = 'mt-6';

  return (
    <>
      <div>
        {leakedSection}
      </div>
      <div className={`mx-auto ${spacer} ${pageSize} shadow-lg rounded-lg bg-white`}>
        {children}
      </div>
    </>
  );
}

export default LeakedPage;
