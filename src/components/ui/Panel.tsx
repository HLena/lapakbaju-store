
const Panel = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
      { children }
    </div>
  )
}

export default Panel