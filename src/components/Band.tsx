interface BandProps {
  color: string;
}

const Band = ({ color }: BandProps) => {
  return (
    <div
      className={`${color} text-white w-[200px] text-center py-2 px-4 transform rotate-45 shadow-lg`}
    >
      Jobsforce
    </div>
  );
};

export default Band;
