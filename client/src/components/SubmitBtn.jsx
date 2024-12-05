const SubmitBtn = ({ formBtn }) => {
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && "form-btn"}`}
      disabled={isSubmitting && false}
    >
      {isSubmitting ? "submitting.." : "submit"}
    </button>
  );
};

export default SubmitBtn;
