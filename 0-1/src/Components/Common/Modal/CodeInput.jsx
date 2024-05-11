const CodeInput = () => {
    return (
    <div className="mt-1">
      <input
        id="code"
        name="code"
        type="text"
        required
        maxlength="1"
        className=" appearance-none block w-[55px] rounded-[20px] border border-gray-300 text-center py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>
    )
  }
  
  export {CodeInput}