// FormInput component for rendering a labeled input field
const FormInput = ({
  inputLabel,
  htmlFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabel,
  ...restProps
}) => {
  return (
    <div className="mx-auto mb-4">
      {/* Label for the input field */}
      <label
        className="mb-2 block w-full text-sm text-dark-900 dark:text-dark-100"
        htmlFor={htmlFor}
      >
        {inputLabel}
      </label>
      {/* Input field */}
      <input
        className="mx-auto w-[65vw] max-w-xl appearance-none justify-center rounded-lg border border-violet-400 bg-dark-100 px-5 py-2 text-sm text-dark-900 shadow-inner placeholder:text-dark-400 focus:border-violet-900 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-violet-400 dark:bg-dark-300 dark:text-dark-100 dark:placeholder:text-dark-100 lg:w-[50vw]"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabel}
        required
        {...restProps}
      />
    </div>
  );
};

export default FormInput;
